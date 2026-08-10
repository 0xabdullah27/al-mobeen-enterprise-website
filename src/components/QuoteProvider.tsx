"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export interface QuoteItem {
  slug: string;
  displayName: string;
  category: string;
  quantity: string;
  notes: string;
}

interface QuoteState {
  items: QuoteItem[];
}

type QuoteAction =
  | { type: "ADD_ITEM"; payload: { slug: string; displayName: string; category: string } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { slug: string; quantity: string } }
  | { type: "UPDATE_NOTES"; payload: { slug: string; notes: string } }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; payload: QuoteItem[] };

function quoteReducer(state: QuoteState, action: QuoteAction): QuoteState {
  switch (action.type) {
    case "ADD_ITEM": {
      if (state.items.some((i) => i.slug === action.payload.slug)) return state;
      return {
        items: [
          ...state.items,
          { ...action.payload, quantity: "", notes: "" },
        ],
      };
    }
    case "REMOVE_ITEM":
      return { items: state.items.filter((i) => i.slug !== action.payload) };
    case "UPDATE_QUANTITY":
      return {
        items: state.items.map((i) =>
          i.slug === action.payload.slug
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    case "UPDATE_NOTES":
      return {
        items: state.items.map((i) =>
          i.slug === action.payload.slug
            ? { ...i, notes: action.payload.notes }
            : i
        ),
      };
    case "CLEAR":
      return { items: [] };
    case "HYDRATE":
      return { items: action.payload };
    default:
      return state;
  }
}

interface QuoteContextValue {
  items: QuoteItem[];
  addItem: (slug: string, displayName: string, category: string) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: string) => void;
  updateNotes: (slug: string, notes: string) => void;
  clearAll: () => void;
  isInQuote: (slug: string) => boolean;
  count: number;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

const STORAGE_KEY = "ame-quote-list";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quoteReducer, { items: [] });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          dispatch({ type: "HYDRATE", payload: parsed });
        }
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // ignore quota errors
    }
  }, [state.items]);

  const addItem = useCallback(
    (slug: string, displayName: string, category: string) => {
      dispatch({ type: "ADD_ITEM", payload: { slug, displayName, category } });
    },
    []
  );

  const removeItem = useCallback((slug: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: slug });
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: string) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { slug, quantity } });
  }, []);

  const updateNotes = useCallback((slug: string, notes: string) => {
    dispatch({ type: "UPDATE_NOTES", payload: { slug, notes } });
  }, []);

  const clearAll = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const isInQuote = useCallback(
    (slug: string) => state.items.some((i) => i.slug === slug),
    [state.items]
  );

  return (
    <QuoteContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        updateNotes,
        clearAll,
        isInQuote,
        count: state.items.length,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote(): QuoteContextValue {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside <QuoteProvider>");
  return ctx;
}

"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { type Language, t as translate } from "@/data/translations";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ame-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored && ["en", "romanUrdu", "urdu"].includes(stored)) {
        setLangState(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  // Update dir attribute and persist
  useEffect(() => {
    const isRTL = lang === "urdu";
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang === "urdu" ? "ur" : lang === "romanUrdu" ? "ur-Latn" : "en");
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
  }, []);

  const t = useCallback(
    (key: string) => translate(key, lang),
    [lang]
  );

  const isRTL = lang === "urdu";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

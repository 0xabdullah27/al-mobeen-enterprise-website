"use client";

import { createContext, useContext, useCallback, useState, useEffect, type ReactNode } from "react";

interface ToastContextValue {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ message: string; id: number } | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  const showToast = useCallback((message: string) => {
    setIsExiting(false);
    setToast({ message, id: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setToast(null);
        setIsExiting(false);
      }, 200);
    }, 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div
          key={toast.id}
          className={`fixed bottom-6 left-1/2 z-[100] px-5 py-3 rounded-xl shadow-lg text-sm font-medium text-inverse-ink bg-primary ${
            isExiting ? "toast-exit" : "toast-enter"
          }`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}

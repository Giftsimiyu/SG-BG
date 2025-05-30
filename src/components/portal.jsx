"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function DropdownPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  const elRef = useRef(null);

  useEffect(() => {
    elRef.current = document.createElement("div");
    document.body.appendChild(elRef.current);
    setMounted(true);
    return () => {
      document.body.removeChild(elRef.current);
    };
  }, []);

  if (!mounted || !elRef.current) return null;

  return createPortal(children, elRef.current);
}

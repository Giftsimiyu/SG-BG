"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropdownPortal from "./portal";

function DropdownMenu({ label, items, isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isMobile && isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpen, isMobile]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown on outside click for mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  if (isMobile) {
    return (
      <div ref={dropdownRef} className="relative">
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          className="flex items-center space-x-1 btn btn-ghost text-black"
        >
          <span>{label}</span>
          <FaChevronDown className="h-4 w-4" />
        </button>
        {isOpen && (
          <div className="ml-4 mt-2 space-y-2">
            {items.map((item, idx) => (
              <a href={item.href} key={idx} className="block text-black">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop (portal-based)
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        ref={buttonRef}
        className="flex items-center space-x-1 btn btn-ghost text-black"
      >
        <span>{label}</span>
        <FaChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <DropdownPortal>
          <div
            className="absolute bg-pink shadow-md rounded w-40 p-2 space-y-2 z-[9999]"
            style={{ top: coords.top, left: coords.left, position: "absolute" }}
          >
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block hover:underline text-black"
              >
                {item.label}
              </a>
            ))}
          </div>
        </DropdownPortal>
      )}
    </div>
  );
}

export default DropdownMenu;

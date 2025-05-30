"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import DropdownMenu from "@/components/dropdown"; // Adjust path as needed

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fakeSuggestions = [
    "God’s grace",
    "Faith in hard times",
    "Devotional for women",
    "Prayer tips",
    "Scripture journaling",
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowSearch(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setIsMenuOpen(false);
  };

  const filteredSuggestions = searchQuery
    ? fakeSuggestions.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-blush transition-all duration-300 ease-in-out  ${
        isScrolled ? "h-14 shadow-md" : "h-20"
      } overflow-visible`}
    >
      {/* Search Overlay */}
      <div
        className={`absolute top-0 left-0 w-full z-40 transition-transform duration-300 ease-in-out ${
          showSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="backdrop-blur-md bg-white/30">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full p-2 rounded bg-transparent border border-copper text-black placeholder:text-black font-Poppins text-sm lg:text-base outline-none"
            />
            <button onClick={toggleSearch} className="ml-2 text-black">
              <FaTimes className="h-6 w-6" />
            </button>

            {filteredSuggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-copper/90 backdrop-blur-md mt-2 rounded shadow-lg p-2 z-50">
                {filteredSuggestions.map((suggestion, idx) => (
                  <li
                    key={idx}
                    className="p-2 text-sm hover:bg-blush rounded cursor-pointer"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setShowSearch(false);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="container mx-auto px-4 flex items-center justify-between lg:hidden h-full">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={isScrolled ? 100 : 130}
          height={isScrolled ? 100 : 130}
          className="transition-all duration-300 ease-in-out"
        />
        <div className="flex items-center space-x-4">
          <button onClick={toggleSearch} className="btn btn-ghost">
            <FaSearch className="h-6 w-6 text-black" />
          </button>
          <button onClick={toggleMenu} className="btn btn-ghost">
            <FaBars className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-copper text-black transition-transform duration-300 ease-in-out z-30 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={toggleMenu}>
            <FaTimes className="h-8 w-8" />
          </button>
        </div>
        <ul className="space-y-4 p-6 text-lg font-Poppins">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Daily Devotional</a>
          </li>
          <li>
            <DropdownMenu
              label="About"
              isMobile={true}
              items={[
                { label: "About me", href: "/about-me" },
                { label: "About the blog", href: "/About-us" },
              ]}
            />
          </li>
          <li>
            <DropdownMenu
              label="Blog Posts"
              isMobile={true}
              items={[
                { label: "Category 1", href: "#" },
                { label: "Category 2", href: "#" },
                { label: "Category 3", href: "#" },
              ]}
            />
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex container mx-auto px-4 items-center justify-between h-full">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={isScrolled ? 100 : 130}
          height={isScrolled ? 100 : 130}
          className="transition-all duration-300 ease-in-out"
        />
        <div className="flex items-center space-x-6 font-Poppins text-lg">
          {!showSearch && (
            <>
              <Link href="#" className="btn btn-ghost text-black">
                Home
              </Link>
              <Link href="#" className="btn btn-ghost text-black">
                Daily Devotionals
              </Link>
              <DropdownMenu
                label="About"
                items={[
                  { label: "About me", href: "/about-me" },
                  { label: "About the blog", href: "About-us" },
                ]}
              />
              <DropdownMenu
                label="Blog Posts"
                items={[
                  { label: "Category 1", href: "#" },
                  { label: "Category 2", href: "#" },
                  { label: "Category 3", href: "#" },
                ]}
              />
              <Link href="#" className="btn btn-ghost text-black">
                Resources
              </Link>
              <Link href="#" className="btn btn-ghost text-black">
                Subscribe
              </Link>
              <Link href="/contact" className="btn btn-ghost text-black">
                Contact
              </Link>
            </>
          )}
          <button onClick={toggleSearch} className="btn btn-ghost">
            <FaSearch className="h-5 w-5 text-black" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

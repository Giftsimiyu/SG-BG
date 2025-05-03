"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const fakeSuggestions = [
    "God’s grace",
    "Faith in hard times",
    "Devotional for women",
    "Prayer tips",
    "Scripture journaling",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDown(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowSearch(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setIsDropDown(false);
    setIsMenuOpen(false);
  };

  const filteredSuggestions = searchQuery
    ? fakeSuggestions.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-blush transition-all duration-300 ease-in-out ${
        isScrolled ? "h-14 shadow-md" : "h-20"
      }`}
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

            {/* Search Suggestions */}
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

      {/* Sidebar for mobile */}
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
            <a href="#">About Me</a>
          </li>
          <li ref={dropdownRef}>
            <button
              onClick={() => setIsDropDown(!isDropDown)}
              className="flex items-center space-x-2"
            >
              <span>Blog Posts</span>
              <FaChevronDown />
            </button>
            {isDropDown && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <a href="#">Category 1</a>
                </li>
                <li>
                  <a href="#">Category 2</a>
                </li>
                <li>
                  <a href="#">Category 3</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
              <Link href="#" className="btn btn-ghost text-black">
                About Me
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropDown(!isDropDown);
                  }}
                  className="btn btn-ghost text-black flex items-center space-x-1"
                >
                  <span>Blog Posts</span>
                  <FaChevronDown className="h-4 w-4" />
                </button>

                <div
                  className={`absolute mt-2 bg-copper shadow-md rounded w-40 p-2 space-y-2 transition-all duration-300 ease-in-out ${
                    isDropDown
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <Link href="#" className="block">
                    Category 1
                  </Link>
                  <Link href="#" className="block">
                    Category 2
                  </Link>
                  <Link href="#" className="block">
                    Category 3
                  </Link>
                </div>
              </div>

              <Link href="#" className="btn btn-ghost text-black">
                Resources
              </Link>
              <Link href="#" className="btn btn-ghost text-black">
                Subscribe
              </Link>
              <Link href="#" className="btn btn-ghost text-black">
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

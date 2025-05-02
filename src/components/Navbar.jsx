"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-blush h-40 ">
      <div className="dropdown dropdown-end">
        <div className="container mx-auto flex justify-between lg:hidden">
          {!isMenuOpen && (
            <button onClick={toggleMenu} className="btn btn-ghost btn-menu">
              <span className="font-Poppins text-lg">Menu</span>
              <FaBars className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>

      {/*Sidebar*/}
      <div
        className={`fixed  inset-0 h-full w-80 bg-copper bg-opacity-50 text-black shadow-lg  transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4  lg:hidden"
        >
          <FaTimes className="h-8 w-8 " />
        </button>

        <div className="p-4">
          <ul className="space-y-4 mt-10 text-lg ">
            <li>
              <a
                href="#"
                className="btn btn-ghost text-black text-lg font-Poppins"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn btn-ghost text-black text-lg font-Poppins"
              >
                Daily Devotional
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn btn-ghost text-black text-lg font-Poppins"
              >
                About Me
              </a>
            </li>

            <div className="relative" ref={dropdownRef}>
              <li>
                <a
                  href="#"
                  className="btn btn-ghost text-black text-lg font-Poppins"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    setIsDropDown(!isDropDown);
                  }}
                >
                  Blog Posts <FaChevronDown className="h-6 w-6" />
                </a>
              </li>

              <ul
                className={`flex flex-col space-y-2 absolute shadow-lg bg-copper  text-black rounded mt-2    w-40            max-h-60 overflow-y-auto transition-all duration-300 ease-in-out transform ${
                  isDropDown
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className="btn btn-ghost text-black text-lg font-Poppins"
                  >
                    Category 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btn-ghost text-black text-lg font-Poppins"
                  >
                    Category 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="btn btn-ghost text-black text-lg font-Poppins"
                  >
                    Category 3
                  </a>
                </li>
              </ul>
            </div>
            <li>
              <a
                href="#"
                className="btn btn-ghost text-black text-lg font-Poppins"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn btn-ghost text-black text-lg font-Poppins"
              >
                Subscribe
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn btn-ghost text-black text-lg font-Poppins"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal Menu for Large Screens*/}

      <Image
        src="/logo.svg"
        alt="Logo"
        width={250}
        height={250}
        className="w-100 l-100 ml-auto lg:w-300 h-300 "
      />

      <div className="hidden lg:flex   items-center ml-auto lg:space-x-6 ">
        <a href="#" className="btn btn-ghost text-black text-lg font-Poppins">
          Home
        </a>
        <a href="#" className="btn btn-ghost text-black text-lg font-Poppins">
          Daily Devotionals
        </a>
        <a href="#" className="btn btn-ghost text-black text-lg font-Poppins">
          About Me
        </a>
        <div className="relative" ref={dropdownRef}>
          {/*onMouseEnter={() => setIsDropDown(true)}
              onMouseLeave={() => setIsDropDown(false)}*/}

          <a
            href="#"
            className="btn btn-ghost text-black text-lg font-Poppins"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              setIsDropDown(!isDropDown);
            }}
          >
            Blog Posts <FaChevronDown className="h-4 w-4" />
          </a>

          <div
            className={`flex flex-col space-y-2 absolute shadow-lg bg-copper  text-black rounded mt-2 w-40 max-h-60 overflow-y-auto transition-all duration-300 ease-in-out transform ${
              isDropDown
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <Link
              href="#"
              className="btn btn-ghost text-black text-lg font-Poppins"
            >
              Category 1
            </Link>
            <Link
              href="#"
              className="btn btn-ghost text-black text-lg font-Poppins"
            >
              Category 2
            </Link>
            <Link
              href="#"
              className="btn btn-ghost text-black text-lg font-Poppins"
            >
              Category 3
            </Link>
          </div>
        </div>

        <a href="#" className="btn btn-ghost text-black text-lg font-Poppins">
          Resources
        </a>
        <a href="#" className="btn btn-ghost text-black text-lg font-Poppins">
          Subscribe
        </a>
        <a href="#" className="btn btn-ghost text-black text-lg font-Poppins">
          Contact
        </a>
      </div>
    </nav>
  );
}
export default Navbar;

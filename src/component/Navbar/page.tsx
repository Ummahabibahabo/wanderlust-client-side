

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoClose, IoMenuSharp } from "react-icons/io5";

export const NavbarPage = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuButton = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-white px-4 py-4 shadow-ldg md:px-8">
      <div className="flex items-center justify-between gap-4 font-medium text-[#0C0B0B]">

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleMenuButton}
            className="rounded-lg p-2 text-2xl hover:bg-gray-100"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoClose /> : <IoMenuSharp />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <Link
            className={pathname === "/" ? "text-[#15A1BF] underline underline-offset-8" : "hover:text-[#15A1BF]"}
            href="/"
          >
            Home
          </Link>

          <Link
            className={pathname === "/destinations" ? "text-[#15A1BF] underline underline-offset-8" : "hover:text-[#15A1BF]"}
            href="/destinations"
          >
            Destinations
          </Link>

          <Link
            className={pathname === "/my-bookings" ? "text-[#15A1BF] underline underline-offset-8" : "hover:text-[#15A1BF]"}
            href="/my-bookings"
          >
            My Bookings
          </Link>

          <Link
            className={pathname === "/admin" ? "text-[#15A1BF] underline underline-offset-8" : "hover:text-[#15A1BF]"}
            href="/admin"
          >
            Admin
          </Link>
        </div>

        {/* Logo */}
        <Link href="/" className="text-xl font-bold  md:text-2xl">
          Wanderlast
        </Link>

        {/* Desktop Profile and Auth */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          <Link
            className={`flex items-center gap-2 ${
              pathname === "/profile"
                ? "text-[#15A1BF] underline underline-offset-8"
                : "hover:text-[#15A1BF]"
            }`}
            href="/profile"
          >
            <FaUser />
            <span>Profile</span>
          </Link>

          <Link
            className={pathname === "/login" ? "text-[#15A1BF] underline underline-offset-8" : "hover:text-[#15A1BF]"}
            href="/login"
          >
            Login
          </Link>

          <Link
            className={
              pathname === "/signUp" ? "text-[#15A1BF] underline underline-offset-8" : ""
            }
            href="/signUp"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Profile Icon */}
        <Link
          href="/profile"
          className={`rounded-lg p-2 text-xl md:hidden ${
            pathname === "/profile" ? "text-[#15A1BF]" : ""
          }`}
          aria-label="Profile"
        >
          <FaUser />
        </Link>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 shadow-lg pt-4 md:hidden p-5">

          <Link
            onClick={() => setMenuOpen(false)}
            className={`rounded-lg px-3 py-2 hover:bg-gray-100 ${
              pathname === "/" ? "bg-[#EAF8FB] text-[#15A1BF]" : ""
            }`}
            href="/"
          >
            Home
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            className={`rounded-lg px-3 py-2 hover:bg-gray-100 ${
              pathname === "/destinations" ? "bg-[#EAF8FB] text-[#15A1BF]" : ""
            }`}
            href="/destinations"
          >
            Destinations
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            className={`rounded-lg px-3 py-2 hover:bg-gray-100 ${
              pathname === "/my-bookings" ? "bg-[#EAF8FB] text-[#15A1BF]" : ""
            }`}
            href="/my-bookings"
          >
            My Bookings
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            className={`rounded-lg px-3 py-2 hover:bg-gray-100 ${
              pathname === "/admin" ? "bg-[#EAF8FB] text-[#15A1BF]" : ""
            }`}
            href="/admin"
          >
            Admin
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100 ${
              pathname === "/profile" ? "bg-[#EAF8FB] text-[#15A1BF]" : ""
            }`}
            href="/profile"
          >
            <FaUser />
            Profile
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            className={`rounded-lg px-3 py-2 hover:bg-gray-100 ${
              pathname === "/login" ? "bg-[#EAF8FB] text-[#15A1BF]" : ""
            }`}
            href="/login"
          >
            Login
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            className={`rounded-lg px-3 py-2 hover:bg-gray-100 ${
              pathname === "/signUp" ? "bg-[#EAF8FB] text-[#15A1BF]" : ""
            }`}
            href="/signUp"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

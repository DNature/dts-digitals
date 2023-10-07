"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import clsx from "clsx";
import { Logo } from "./Logo";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-cubic", offset: -100 });
    AOS.refresh();
    if (window) {
      let prevScrollPos = window.screenY;
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const visible = prevScrollPos > currentScrollPos;

        setShowNavbar(visible);
        prevScrollPos = currentScrollPos;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav
      className={clsx(
        `fixed top-0 w-full h-20 z-30 px-5 items-center bg-white bg-opacity-20`,
        {
          ["block"]: showNavbar,
          "lg:hidden": !showNavbar,
          "backdrop-blur-lg": !isOpen,
        },
      )}
    >
      <div className="flex z-10 justify-between items-center py-10 mx-auto w-full max-w-screen-2xl h-full">
        <div className="flex gap-x-10 items-center">
          <Logo />
          <Link href="about" className="max-lg:hidden btn-ghost btn">
            About
          </Link>
          <Link href="/services" className="max-lg:hidden btn-ghost btn">
            Services
          </Link>
          <Link href="/#projects" className="max-lg:hidden btn-ghost btn">
            Projects
          </Link>
        </div>
        <div className="flex gap-x-7 items-center">
          <Link
            href="/contact"
            className="px-12 text-black rounded-full border-black btn btn-outline max-lg:hidden"
          >
            Contact
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden"
            id="nav-button"
            aria-label="nav-button"
          >
            {isOpen ? <IoClose size={40} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      <div
        className={`bg-white fixed menu overflow-auto -z-[1] right-0 left-0 top-0 bottom-0 opacity-0 transition-opacity duration-300 pt-20 px-5 ${
          isOpen ? "block opacity-100" : "hidden"
        } lg:hidden`}
      >
        <div className="flex relative flex-col gap-7 justify-start items-start mt-10 cursor-pointer lg:hidden">
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="about"
            className="lg:hidden btn-ghost btn"
          >
            About
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="/services"
            className="lg:hidden btn-ghost btn"
          >
            Services
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="#projects"
            className="lg:hidden btn-ghost btn"
          >
            Projects
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="/contact"
            className="lg:hidden btn-ghost btn"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

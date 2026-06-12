"use client";

import { motion } from "framer-motion";
// Named imports
import { navItems } from "../_constants/Constants";
// Default Imports
import Image from "next/image";

import Link from "next/link";

function Navbar() {
  return (
    <nav className="max-lg:hidden flex justify-between items-center p-5 w-[90%]">
      {/* BIAFO LOGO  */}

      <Link href="/">
        <Image src="/Logo.svg" alt="Biafo.Ai Logo" width={130} height={130} />
      </Link>

      {/* NAV BAR  */}

      <ul className="flex gap-6 text-(--color-gray)">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="hover:bg-(--color-cyan) hover:text-(--primary-dark) rounded transition-all duration-300"
          >
            <Link href={item.href} className="block px-4 py-2 hover:border-b">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Demo Button  */}
      {/* <Reveal>
        <button className="bg-(--color-cyan) py-2 px-4 rounded-full">
          Request Demo
        </button>
      </Reveal> */}
    </nav>
  );
}

export default Navbar;

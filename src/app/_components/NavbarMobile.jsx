"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { navItems } from "../_constants/Constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 24,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div ref={navRef}>
      <nav className="lg:hidden flex justify-between items-center p-5 w-[95%]">
        <Link href="/">
          <Image src="/Logo.svg" alt="Biafo.Ai Logo" width={130} height={130} />
        </Link>
        <button
          className="text-(--color-offWhite) text-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-4 py-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseSharp /> : <MdOutlineMenu />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="  w-full  border-t border-(--color-gray)/50"
          >
            <ul className="flex flex-col gap-4 m-auto py-10 w-[95%]">
              {navItems.map((item) => (
                <motion.li
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                  key={item.id}
                  className="p-2 font-semibold text-xl text-(--color-gray) hover:text-(--color-offWhite)"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link
                    href={item.href}
                    className="block flex items-center gap-1 p-2 transition-colors"
                  >
                    {item.name} <GoArrowRight />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

//  <nav className="max-lg:hidden flex justify-between items-center p-5 w-[90%]">
//       {/* BIAFO LOGO  */}
//       <Image src="/Logo.svg" alt="Biafo.Ai Logo" width={130} height={130} />
//       {/* NAV BAR  */}

//       <ul className="flex gap-6 text-(--color-gray)">
//         {navItems.map((item) => (
//           <li key={item.id}>
//             <a href="#">{item.name}</a>
//           </li>
//         ))}
//       </ul>
//       {/* Demo Button  */}
//       <button className="bg-(--color-cyan) py-2 px-4 rounded-full">
//         Request Demo
//       </button>
//     </nav>

export default NavbarMobile;

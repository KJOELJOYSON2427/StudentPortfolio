"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getMenuItems } from '@/logic/MenuItem';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';
import SocialIcons from "../SocialIcons";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const menuItems = getMenuItems();

  // Sync dark mode with localStorage and document
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 bg-black text-white z-50 backdrop-blur-md bg-opacity-80 shadow-lg">
        <nav className="flex items-center justify-between py-4 px-6 md:px-12">
          <motion.h1
            className="text-xl font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
          >
            Portfolio
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:ml-auto items-center gap-4">
            {menuItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                className={`px-4 py-2 rounded-full font-semibold transition backdrop-blur-md shadow-md ${
                  pathname === item.href
                    ? "bg-gray-200 text-black"
                    : "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle + Hamburger Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full md:hidden hover:bg-white/20 transition"
              title="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="md:hidden relative z-50"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-gradient-to-br from-black via-gray-900 to-black text-white z-50 md:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.x > 100) setIsMobileMenuOpen(false);
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <motion.h2
                  className="text-xl font-bold"
                  layoutId="menuTitle"
                  whileHover={{ scale: 1.05 }}
                >
                  Portfolio
                </motion.h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col py-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`px-6 py-4 font-medium transition-colors border-b border-gray-800 last:border-b-0 ${
                      pathname === item.href
                        ? "bg-white text-black"
                        : "text-white hover:bg-gray-800"
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                      type: "spring",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Social Icons */}
              <motion.div
                className="absolute bottom-5 left-0 right-0 p-6 border-t border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.2 }}
              >
                <SocialIcons />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

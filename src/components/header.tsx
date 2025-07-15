"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Services from "./services";
import HowItWorks from "./how-it-works";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="h-16">
          {/* Logo */}
          <div className="flex-shrink-0 p-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=" space-x-4"
            >
              <span className="text-xl font-bold gradient-text">
                AiVerse
              </span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className=" hidden md:flex align-items:center hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0space-x-8 ">
            {navigation.map((item) => {
              if (item.name === "Services") {
                return (
                  <button
                    key={item.name}
                    onClick={() => setIsServicesOpen(true)}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium bg-transparent border-none outline-none cursor-pointer"
                    style={{ padding: "16px" }}
                  >
                    {item.name}
                  </button>
                );
              } else if (item.name === "How It Works") {
                return (
                  <button
                    key={item.name}
                    onClick={() => setIsHowItWorksOpen(true)}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium bg-transparent border-none outline-none cursor-pointer"
                    style={{ padding: "16px" }}
                  >
                    {item.name}
                  </button>
                );
              } else {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium"
                    style={{ padding: "16px" }}
                  >
                    {item.name}
                  </a>
                );
              }
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                if (item.name === "Services") {
                  return (
                    <button
                      key={item.name}
                      onClick={() => { setIsMenuOpen(false); setIsServicesOpen(true); }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer"
                    >
                      {item.name}
                    </button>
                  );
                } else if (item.name === "How It Works") {
                  return (
                    <button
                      key={item.name}
                      onClick={() => { setIsMenuOpen(false); setIsHowItWorksOpen(true); }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer"
                    >
                      {item.name}
                    </button>
                  );
                } else {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Services */}
      {isServicesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8">
            <button
              onClick={() => setIsServicesOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-primary-600 text-2xl font-bold z-10"
              aria-label="Close"
            >
              ×
            </button>
            <Services />
          </div>
        </div>
      )}

      {/* Modal for How It Works */}
      {isHowItWorksOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8">
            <button
              onClick={() => setIsHowItWorksOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-primary-600 text-2xl font-bold z-10"
              aria-label="Close"
            >
              ×
            </button>
            <HowItWorks />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

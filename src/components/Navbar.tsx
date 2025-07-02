import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calculator, Menu, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-full shadow-lg border border-white/30 dark:border-gray-700/30">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              AreaCalc
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === "/" || location.pathname === "/shape-calculator"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Shape Calculator
            </Link>
            <Link
              to="/carpet-area"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === "/carpet-area"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Carpet Area
            </Link>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full w-10 h-10 bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-800 dark:text-white" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-800 dark:text-white" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full w-10 h-10 bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-800 dark:text-white" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-800 dark:text-white" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full w-10 h-10 bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30"
            >
              <Menu className="h-5 w-5 text-gray-800 dark:text-white" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 dark:border-gray-700/20 px-6 py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === "/" || location.pathname === "/shape-calculator"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shape Calculator
            </Link>
            <Link
              to="/carpet-area"
              className={`block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === "/carpet-area"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Carpet Area
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

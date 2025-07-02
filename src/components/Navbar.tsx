
import { Building, Calculator, Shapes, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <Building className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">TheArchSpace</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Professional Tools</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            <Link to="/">
              <Button
                variant={isActive('/') ? 'default' : 'ghost'}
                size="sm"
                className="rounded-full"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Carpet Area
              </Button>
            </Link>
            
            <Link to="/shape-calculator">
              <Button
                variant={isActive('/shape-calculator') ? 'default' : 'ghost'}
                size="sm"
                className="rounded-full"
              >
                <Shapes className="w-4 h-4 mr-2" />
                Shape Calculator
              </Button>
            </Link>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

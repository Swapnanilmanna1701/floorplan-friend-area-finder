
import { Building } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <Building className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">TheArchSpace</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Professional Tools</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

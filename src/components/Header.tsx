
import { Building } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <Building className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">TheArchSpace</h2>
            <p className="text-sm text-gray-500">Professional Tools</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

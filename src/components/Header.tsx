import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Film, Search, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Book className="h-6 w-6 text-green-600" />
              <Film className="h-6 w-6 text-green-600 -ml-2" />
            </div>
            <span className="text-xl font-bold text-gray-800">Page2Screen</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/search" className="text-gray-600 hover:text-green-600">
              <Search className="h-5 w-5" />
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-green-600">
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
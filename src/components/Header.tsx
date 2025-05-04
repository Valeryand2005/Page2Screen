import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Film, Search, User, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Book className="h-6 w-6 text-green-600" />
              <Film className="h-6 w-6 text-green-600 -ml-2" />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">Page2Screen</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/search" className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400">
              <Search className="h-5 w-5" />
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400">
              <User className="h-5 w-5" />
            </Link>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

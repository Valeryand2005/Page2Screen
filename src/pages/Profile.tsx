import React from 'react';
import { Settings, Heart, Clock } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-semibold text-green-600">JD</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
              <p className="text-gray-600 dark:text-gray-400">john.doe@example.com</p>
            </div>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="h-5 w-5 text-green-600" />
            <h2 className="text-xl font-semibold dark:text-white">Favorites</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Your favorite content will appear here</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="h-5 w-5 text-green-600" />
            <h2 className="text-xl font-semibold dark:text-white">History</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Your viewing history will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

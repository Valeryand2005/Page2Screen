import React, { useState } from 'react';
import { Search as SearchIcon, Filter, BookOpen, Film, Star, Clock, ChevronDown } from 'lucide-react';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const searchResults = [
    {
      title: "The Midnight Library",
      type: "book",
      author: "Matt Haig",
      rating: 4.2,
      genre: "Fiction",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&h=400"
    },
    {
      title: "Oppenheimer",
      type: "movie",
      director: "Christopher Nolan",
      rating: 4.8,
      genre: "Drama",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=300&h=400"
    },
    {
      title: "Foundation",
      type: "series",
      creator: "David S. Goyer",
      rating: 4.5,
      genre: "Sci-Fi",
      image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=300&h=400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8 dark:from-gray-900 dark:to-gray-900 rounded-2xl p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">Advanced Search</h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search books, movies, or series..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg text-gray-900 dark:text-white bg-white dark:bg-gray-900 dark:border-gray-800"
              />
              <SearchIcon className="absolute left-4 top-3.5 h-6 w-6 text-gray-400" />
            </div>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400"
          >
            <Filter className="h-5 w-5" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'transform rotate-180' : ''}`} />
          </button>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
            Search
          </button>
        </div>

        {showFilters && (
          <div className="bg-white rounded-lg p-6 shadow-lg dark:bg-gray-900">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-800"
                >
                  <option value="all">All Types</option>
                  <option value="book">Books</option>
                  <option value="movie">Movies</option>
                  <option value="series">Series</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Genre</label>
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-800"
                >
                  <option value="all">All Genres</option>
                  <option value="fiction">Fiction</option>
                  <option value="drama">Drama</option>
                  <option value="scifi">Sci-Fi</option>
                  <option value="thriller">Thriller</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-800"
                >
                  <option value="all">Any Rating</option>
                  <option value="4plus">4+ Stars</option>
                  <option value="3plus">3+ Stars</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-900">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {item.type === 'movie' && <Film className="h-5 w-5 text-blue-500" />}
                {item.type === 'book' && <BookOpen className="h-5 w-5 text-green-500" />}
                {item.type === 'series' && <Film className="h-5 w-5 text-purple-500" />}
                <span className="text-sm font-medium text-gray-500 capitalize">
                  {item.type}
                </span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{item.genre}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {item.type === 'book' && `By ${item.author}`}
                {item.type === 'movie' && `Directed by ${item.director}`}
                {item.type === 'series' && `Created by ${item.creator}`}
              </p>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium">{item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

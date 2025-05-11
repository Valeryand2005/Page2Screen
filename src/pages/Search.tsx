import React, { useEffect, useState } from 'react';
import { Search as SearchIcon, Filter, BookOpen, Film, Star, ChevronDown } from 'lucide-react';

type Item = {
  title: string;
  type: 'book' | 'movie';
  author?: string;
  director?: string;
  rating: number;
  genre: string;
  image: string;
};

function generateImage(item: any) {
  const type = item.author ? 'book' : 'movie';
  const genre = (item.genre || item.genres?.[0] || type).toLowerCase();

  const keywords =
    genre.includes('fantasy') ? 'fantasy,magic' :
    genre.includes('horror') ? 'horror,dark' :
    genre.includes('romance') ? 'romance,love' :
    genre.includes('sci-fi') ? 'sci-fi,space' :
    genre.includes('comedy') ? 'fun,comedy' :
    genre.includes('adventure') ? 'adventure,journey' :
    'art';

  return `https://picsum.photos/600/800?random=${Math.floor(Math.random() * 1000)}`;
}

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [allResults, setAllResults] = useState<Item[]>([]);
  const [filteredResults, setFilteredResults] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksRes = await fetch('/data/books.json');
        const moviesRes = await fetch('/data/movies.json');
        const books = await booksRes.json();
        const movies = await moviesRes.json();

        const formattedBooks = books.map((book: any) => ({
          title: book.title,
          type: 'book',
          author: book.author || 'Unknown',
          rating: book.rating || 0,
          genre: (book.genres && book.genres[0]) || 'Unknown',
          image: generateImage(book),
        }));

        const formattedMovies = movies.map((movie: any) => ({
          title: movie.title,
          type: 'movie',
          director: movie.director || 'Unknown',
          rating: movie.rating || 0,
          genre: (movie.genres && movie.genres[0]) || 'Unknown',
          image: generateImage(movie),
        }));

        const mergedResults = [...formattedBooks, ...formattedMovies];
        setAllResults(mergedResults);
        setFilteredResults(mergedResults);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    let results = allResults;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(item =>
        item.title.toLowerCase().includes(query)
      );
    }

    if (selectedType !== 'all') {
      results = results.filter(item => item.type === selectedType);
    }

    if (selectedGenre !== 'all') {
      results = results.filter(item => item.genre.toLowerCase() === selectedGenre.toLowerCase());
    }

    if (selectedRating === '4plus') {
      results = results.filter(item => item.rating >= 4);
    } else if (selectedRating === '3plus') {
      results = results.filter(item => item.rating >= 3);
    }

    setFilteredResults(results);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 mb-8 dark:from-gray-900 dark:to-gray-900">
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
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          <button 
            onClick={handleSearch}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
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
                  <option value="romance">Romance</option>
                  <option value="thriller">Thriller</option>
                  <option value="sci-fi">Sci-Fi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
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
        {filteredResults.length > 0 ? (
          filteredResults.map((item, index) => (
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
                  <span className="text-sm font-medium text-gray-500 capitalize">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{item.genre}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title.replace(/\s\d+$/, '')}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {item.type === 'book' && `By ${item.author}`}
                  {item.type === 'movie' && `Directed by ${item.director}`}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{item.rating}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;

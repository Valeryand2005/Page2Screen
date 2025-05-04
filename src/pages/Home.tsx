import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, Sparkles, TrendingUp, BookOpen, Film, Star, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const trendingItems = [
    {
      title: "Dune: Part Two",
      type: "movie",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=300&h=400"
    },
    {
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      type: "book",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&h=400"
    },
    {
      title: "The Last of Us",
      type: "series",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=300&h=400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-900 rounded-2xl p-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 dark:text-white">
          Discover Your Next Favorite Story
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your personal AI-powered guide to the best books, movies, and series. Get recommendations based on your mood and interests.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/search"
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Start Exploring
          </Link>
          <Link
            to="/chat"
            className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 dark:hover:bg-gray-900 transition-colors font-semibold"
          >
            Chat with AI
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Link
          to="/search"
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200 dark:bg-gray-900"
        >
          <Search className="h-12 w-12 text-green-600 mb-6" />
          <h2 className="text-2xl font-semibold mb-4">Advanced Search</h2>
          <p className="text-gray-600 mb-4">
            Find exactly what you're looking for with our powerful search tools. Filter by genre, rating, release date, and more.
          </p>
          <span className="text-green-600 font-semibold flex items-center">
            Try it now →
          </span>
        </Link>

        <Link
          to="/chat"
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200 dark:bg-gray-900"
        >
          <MessageSquare className="h-12 w-12 text-green-600 mb-6" />
          <h2 className="text-2xl font-semibold mb-4">AI Chat Assistant</h2>
          <p className="text-gray-600 mb-4">
            Get personalized recommendations through natural conversation. Tell us what you like, and we'll find the perfect match.
          </p>
          <span className="text-green-600 font-semibold flex items-center">
            Start chatting →
          </span>
        </Link>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200 dark:bg-gray-900">
          <Sparkles className="h-12 w-12 text-green-600 mb-6" />
          <h2 className="text-2xl font-semibold mb-4">Mood-based Discovery</h2>
          <p className="text-gray-600 mb-4">
            Let your emotions guide you. Find content that perfectly matches your current mood and preferences.
          </p>
          <span className="text-green-600 font-semibold flex items-center">
            Coming soon
          </span>
        </div>
      </div>

      {/* Trending Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-green-600" />
            Trending Now
          </h2>
          <Link to="/search" className="text-green-600 hover:text-green-700 font-semibold">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {trendingItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {item.type === 'movie' && <Film className="h-5 w-5 text-blue-500" />}
                  {item.type === 'book' && <BookOpen className="h-5 w-5 text-green-500" />}
                  {item.type === 'series' && <Film className="h-5 w-5 text-purple-500" />}
                  <span className="text-sm font-medium text-gray-500 capitalize">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white rounded-xl shadow-lg p-8 mb-16 dark:bg-gray-900">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">100,000+</div>
            <div className="text-gray-600">Books & Movies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

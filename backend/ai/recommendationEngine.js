import { getBooks, getMovies } from '../db.js';

export function recommend(query) {
  const lowerQuery = query.toLowerCase();
  const books = getBooks();
  const movies = getMovies();

  function isRelevant(item) {
    return (
      item.tags?.some(tag => lowerQuery.includes(tag)) ||
      item.genre?.toLowerCase().includes(lowerQuery) ||
      item.genres?.some(g => lowerQuery.includes(g.toLowerCase())) ||
      item.mood?.some(m => lowerQuery.includes(m)) ||
      item.similar?.some(title => lowerQuery.includes(title.toLowerCase()))
    );
  }

  const relevantBooks = books.filter(isRelevant);
  const relevantMovies = movies.filter(isRelevant);

  const topBooks = relevantBooks
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const topMovies = relevantMovies
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return {
    books: topBooks,
    movies: topMovies
  };
}

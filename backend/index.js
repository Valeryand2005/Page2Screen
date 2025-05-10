const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// 🔍 Поиск фильмов по жанру
app.get('/api/movies', (req, res) => {
  const { genre } = req.query;
  if (!genre) return res.status(400).json({ error: 'Genre required' });

  const movies = require('./data/movies.json');
  const filtered = movies.filter(movie =>
    movie.genres.some(g => g.toLowerCase().includes(genre.toLowerCase()))
  );

  res.json(filtered.slice(0, 5));
});

// 📘 Поиск книг по жанру
app.get('/api/books', (req, res) => {
  const { genre } = req.query;
  if (!genre) return res.status(400).json({ error: 'Genre required' });

  const books = require('./data/books.json');
  const filtered = books.filter(book =>
    book.genre.toLowerCase().includes(genre.toLowerCase())
  );

  res.json(filtered.slice(0, 5));
});

app.listen(PORT, () => {
  console.log(`✅ JSON API server is running at http://localhost:${PORT}`);
});

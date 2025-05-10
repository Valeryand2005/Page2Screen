import express from 'express';
import { recommend } from '../ai/recommendationEngine.js';
import { explainRecommendation } from '../ai/xaiModule.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const recommendations = recommend(message);

  const formatted = [...recommendations.books, ...recommendations.movies].map(item => ({
    title: item.title,
    type: item.author ? 'book' : 'movie',
    author: item.author || null,
    rating: item.rating || 0,
    description: item.description || generateDescription(item),
    image: item.image || generateImage(item),
    explanation: explainRecommendation(item, message),
    year: item.year || null
  }));

  res.json({ recommendations: formatted });
});

export default router;

// ---------- Вспомогательные функции ----------

function generateDescription(item) {
  const genre = item.genre || (item.genres?.[0]) || 'fiction';
  const mood = item.mood?.slice(0, 2).join(', ') || 'varied themes';
  const type = item.author ? 'book' : 'film';

  return `A ${genre.toLowerCase()} ${type} titled '${item.title}', exploring themes typical of the genre, including ${mood}.`;
}

function generateImage(item) {
  const genre = (item.genre || item.genres?.[0] || 'book').toLowerCase();

  // Ограниченные ключевые слова для лучшей генерации Unsplash
  const keywords =
    genre.includes('fantasy') ? 'fantasy,magic' :
    genre.includes('horror') ? 'horror,dark' :
    genre.includes('romance') ? 'romance,love' :
    genre.includes('sci-fi') ? 'sci-fi,space' :
    genre.includes('comedy') ? 'fun,comedy' :
    genre.includes('adventure') ? 'adventure,journey' :
    'book';

  return `https://source.unsplash.com/featured/300x400/?${encodeURIComponent(keywords)}`;
}

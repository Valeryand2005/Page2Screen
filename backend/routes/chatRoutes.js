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

  const formatted = [...recommendations.books, ...recommendations.movies].map(item => {
    const image = item.image || generateImage(item);
    console.log('Generated image URL:', image);

    return {
      title: item.title,
      type: item.author ? 'book' : 'movie',
      author: item.author || null,
      rating: item.rating || 0,
      description: item.description || generateDescription(item),
      image,
      explanation: explainRecommendation(item, message),
      year: item.year || null
    };
  });

  res.json({ recommendations: formatted });
});

export default router;

// ---------- Вспомогательные функции ----------

function generateImage(item) {
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

  return `https://picsum.photos/300/400?random=${Math.floor(Math.random() * 1000)}`;

}

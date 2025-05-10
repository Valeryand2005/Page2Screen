// backend/ai/xaiModule.js
export function explainRecommendation(result, query) {
  const reasons = [];

  if (result.tags?.some(tag => query.toLowerCase().includes(tag))) {
    reasons.push(`Matched tags: ${result.tags.join(', ')}`);
  }
  if (result.genre && query.toLowerCase().includes(result.genre.toLowerCase())) {
    reasons.push(`Matched genre: ${result.genre}`);
  }
  if (result.mood?.some(m => query.toLowerCase().includes(m))) {
    reasons.push(`Matched mood: ${result.mood.join(', ')}`);
  }

  return reasons.length ? reasons.join('; ') : 'General similarity detected.';
}

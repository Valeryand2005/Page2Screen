export interface User {
  id: string;
  email: string;
  preferences: {
    mood: string[];
    hobbies: string[];
    favoriteActors: string[];
  };
  language: 'en' | 'ru';
}

export interface Media {
  id: string;
  type: 'book' | 'movie' | 'series';
  metadata: {
    title: string;
    description: string;
    genre: string[];
    actors?: string[];
    author?: string;
  };
  externalLinks: {
    kinopoisk?: string;
    chitaiKnigi?: string;
  };
}

export interface Interaction {
  userId: string;
  mediaId: string;
  rating: number;
  timestamp: Date;
}
// backend/db.js
import fs from 'fs';
import path from 'path';

const booksPath = path.resolve('data/books.json');
const moviesPath = path.resolve('data/movies.json');

export const getBooks = () => JSON.parse(fs.readFileSync(booksPath));
export const getMovies = () => JSON.parse(fs.readFileSync(moviesPath));

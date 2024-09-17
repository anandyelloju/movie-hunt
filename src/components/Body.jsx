import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MoviesCards from './MovieCards';

const Body = () => {
  const [movies, setMovies] = useState([]); 
  const [isSearching, setIsSearching] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSearch = (searchedMovies) => {
    setMovies(searchedMovies); 
    setIsSearching(true); 
  };

  useEffect(() => {
    if (!isSearching) {
      const fetchTrendingMovies = async () => {
      const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
      try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          console.log(data)
          setMovies(data.results);
      } catch (error) {
          console.error('Error fetching trending movies:', error);
      }
      };
      fetchTrendingMovies();
    }
  }, [isSearching]);

  return (
    <div>
      <section className='bg-black text-white text-center py-20 px-16 md:px-0'>
        <p className='text-4xl font-serif font-semibold'>Where Movies and Information Unite Effortlessly</p>
        <p className='mb-11'>Discover and explore movies instantly with detailed information at your fingertips.</p>
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className='movies-section bg-gray-800 py-10'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-semibold text-yellow-300 mb-6'>
            {isSearching ? 'Search Results' : 'Trending Movies'}
          </h2>
          <MoviesCards movies={movies} />
        </div>
      </section>
    </div>
  );
};

export default Body;

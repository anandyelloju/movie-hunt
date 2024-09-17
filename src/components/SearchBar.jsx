import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
      );
      const data = await response.json();
      if (onSearch) {
        onSearch(data.results); // Pass the search results back to the parent (HeroSection)
      }
    } catch (error) {
      console.error('Error fetching searched movies:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className='flex items-center justify-center'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search movies...'
        className='w-full max-w-md px-4 py-2 text-black rounded-l-lg border-2 border-yellow-300 shadow-sm focus:outline-none focus:border-transparent'
      />
      <button
        type='submit'
        className='px-4 py-2 text-black font-bold rounded-r-lg bg-yellow-300 hover:bg-yellow-400 border-2 border-yellow-300'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

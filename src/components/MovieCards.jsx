import React, { useState } from 'react';

const MoviesCards = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-9">
      {movies.map((movie) => (
        <div key={movie.id} className="relative group bg-white rounded-lg overflow-hidden shadow-2xl shadow-slate-500">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title}
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="p-2">
            <h3 className="text-xl text-center font-bold mb-2">{movie.title}</h3>
          </div>
          
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="text-white p-4 max-w-xs text-center">
              <h3 className="text-2xl font-bold mb-2">{movie.title}</h3>
              <p className="text-sm mb-2">Release Date: {movie.release_date}</p>
              <p className="text-sm mb-2">Overview: {movie.overview}</p>
              <p className="text-sm">Rating: {movie.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesCards;

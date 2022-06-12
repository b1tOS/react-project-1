import React from 'react';
import { Card } from './Card';

const Cards = (props) => {
  const { movies } = props;
  let counter = 0;
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Card
          id={movie.imdbID}
          key={counter++}
          title={movie.Title}
          type={movie.Type}
          year={movie.Year}
          imageSrc={movie.Poster}
        />
      ))}
    </div>
  );
};

export { Cards };

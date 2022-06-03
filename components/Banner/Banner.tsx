import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Movie } from '../../typings';

interface Props {
  netflixOriginals: Movie[];
}

export const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);
  console.log(movie);

  return (
    <div>
      <div>{/* <Image /> */}</div>
    </div>
  );
};

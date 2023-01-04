/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { useEffect } from 'react';

export default function MoviesCarousel({ results }) {
  const array = results;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <Carousel responsive={responsive}>
        {results.map((result) => {
          return (
            <div className='p-3 ' key={result.id}>
              <Image
                className='rounded-lg'
                alt={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                src={
                  result.backdrop_path != null
                    ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                    : `https://image.tmdb.org/t/p/original/${result.poster_path}`
                }
                height={1080}
                width={1920}
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

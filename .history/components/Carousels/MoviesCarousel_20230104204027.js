/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function MoviesCarousel({ results }) {
  const array = results;
  const arr = [];
  const arr2 = () => {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < 5; j++) {
        arr[(i, j)] = arr[i];
      }
    }
  };
  return (
    <>
      <Carousel>
        {results.map((result, idx) => (
          <div key={result.id} className='w-96'>
            <Image
              // className='brightness-50'
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
        ))}
      </Carousel>
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { useEffect } from 'react';

export default function MoviesCarousel({ results, result }) {
  const array = results;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive}>
        {results.map((resultM) => {
          if (resultM.id == result.id) return;
          return (
            <div className='p-3 ' key={resultM.id}>
              <Image
                className='rounded-lg'
                alt={`https://image.tmdb.org/t/p/original/${resultM.poster_path}`}
                src={
                  resultM.backdrop_path != null
                    ? `https://image.tmdb.org/t/p/original/${resultM.backdrop_path}`
                    : `https://image.tmdb.org/t/p/original/${resultM.poster_path}`
                }
                height={980}
                width={1020}
              />
              <h2 className='mt-1 lg:text-lg md:text-sm sm:text-sm text-white transition-all duration-100 eas-in-out sm:hover:font-bold'>
                {result.title || result.original_name}
              </h2>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

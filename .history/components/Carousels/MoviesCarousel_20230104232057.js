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
      breakpoint: { max: 4000, min: 992 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 992, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 576 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
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
                height={1080}
                width={1920}
              />
              <h2 className='mt-1 text-s sm:text-lg text-white transition-all duration-100 eas-in-out sm:hover:font-bold'>
                {result.title || result.original_name}
              </h2>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

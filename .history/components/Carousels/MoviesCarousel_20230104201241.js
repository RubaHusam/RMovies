/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function MoviesCarousel({ result }) {
  return (
    <>
      <Carousel>
        <div>
          <Image
            className='brightness-50'
            alt={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
            src={
              result.backdrop_path != null
                ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                : `https://image.tmdb.org/t/p/original/${result.poster_path}`
            }
            height={80}
            width={20}
          />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <Image
            className='brightness-50'
            alt={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
            src={
              result.backdrop_path != null
                ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                : `https://image.tmdb.org/t/p/original/${result.poster_path}`
            }
            height={80}
            width={20}
          />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <Image
            className='brightness-50'
            alt={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
            src={
              result.backdrop_path != null
                ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                : `https://image.tmdb.org/t/p/original/${result.poster_path}`
            }
            height={80}
            width={20}
          />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    </>
  );
}

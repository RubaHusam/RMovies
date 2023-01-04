/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { useEffect } from 'react';

export default function MoviesCarousel({ results }) {
  const array = results;
  var employees = {
    accounting: [],
  };

  someData.map(function (item) {
    employees.accounting.push({
      poster_path: item.poster_path,
      backdrop_path: item.backdrop_path,
    });
  });

  return (
    <>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}>
        {array.map((result, idx) => (
          <div key={result.id} className='w-96'>
            <Image
              // className='brightness-50'
              alt={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
              src={
                result.backdrop_path != null
                  ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                  : `https://image.tmdb.org/t/p/original/${result.poster_path}`
              }
              height={80}
              width={20}
            />
            ;
          </div>
        ))}
      </Carousel>
    </>
  );
}

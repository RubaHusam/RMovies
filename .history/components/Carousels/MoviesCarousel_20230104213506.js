/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { useEffect } from 'react';

export default function MoviesCarousel({ results }) {
  const array = results;
  const arr = [];
  const arr2 = [];
  useEffect(() => {
    let num = 0;
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 5; j++) {
        arr[j] = array[num];
        num = num + 1;
      }

      arr2[i] = arr;
    }
  }, []);
  console.log(arr2, 'arr2');
  console.log(array, 'array');
  return (
    <>
      <Carousel>
        {arr2[0].map((result, idx) => (
          <div key={result.id} className='w-96'>
            <Image
              key={arr4[idx].id}
              // className='brightness-50'
              alt={`https://image.tmdb.org/t/p/original/${arr4[idx].poster_path}`}
              src={
                arr4[idx].backdrop_path != null
                  ? `https://image.tmdb.org/t/p/original/${arr4[idx].backdrop_path}`
                  : `https://image.tmdb.org/t/p/original/${arr4[idx].poster_path}`
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

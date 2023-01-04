/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MoviesCarousel({ result }) {
  return (
    <>
      <Carousel>
        <div>
          <img src='assets/1.jpeg' alt='00' />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src='assets/2.jpeg' alt='00' />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src='assets/3.jpeg' alt='00' />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    </>
  );
}

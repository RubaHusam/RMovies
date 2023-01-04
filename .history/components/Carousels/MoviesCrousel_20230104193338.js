import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MoviesCrousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
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

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
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

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

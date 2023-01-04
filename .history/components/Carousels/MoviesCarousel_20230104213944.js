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
    <div className={styles.container}>
10          <Carousel
11            showArrows={true}
12            showIndicators={true}
13            infiniteLoop={true}
14            dynamicHeight={false}
15            className={styles.mySwiper}
16          >
17            {array.map((item) => (
18              <div key={item.id} className={styles.swipItem}>
19                <div className={styles.imgBox}>
20                  <img src={item.imageUrl} alt="slides" />
21                </div>
22                <div className={styles.detail}>
23                  <h2>{item.title}</h2>
24                  <p>{item.text}</p>
25                </div>
26              </div>
27            ))}
28          </Carousel>
29        </div>
  );
}

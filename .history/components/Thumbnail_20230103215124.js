/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
};

export default function Thumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div>
      <Image
        scr={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt='..'
        height={1080}
        width={1920}
      />
    </div>
  );
}

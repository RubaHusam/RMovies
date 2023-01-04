/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Thumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div>
      <Image
        alt='The guitarist in the concert.'
        src='https://image.tmdb.org/t/p/original//qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg'
        width={2250}
        height={1390}
      />
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

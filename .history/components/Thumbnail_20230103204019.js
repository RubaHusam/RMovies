/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Thumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div>
      <Image
        scr={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        height={1080}
        width={1920}
      />
    </div>
  );
}

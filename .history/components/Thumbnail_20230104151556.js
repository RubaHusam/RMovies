/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Thumbnail({ result }) {
  return (
    <div>
      <Image
        alt='The guitarist in the concert.'
        src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
        width={1920}
        height={1080}
      />
      <div>
        <p>{result.overview}</p>
      </div>
    </div>
  );
}

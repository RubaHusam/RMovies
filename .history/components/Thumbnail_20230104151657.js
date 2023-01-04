/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Thumbnail({ result }) {
  return (
    <div>
      <Image
        alt='The guitarist in the concert.'
        src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
        height={1080}
        width={20}
      />
      <div>
        <p>{result.overview}</p>
      </div>
    </div>
  );
}

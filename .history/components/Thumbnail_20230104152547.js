/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Thumbnail({ result }) {
  console.log(result);
  return (
    <div>
      <Image
        alt='The guitarist in the concert.'
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
        height={1080}
        width={1920}
      />
      <div classaName='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2>{result.title || result.original_title}</h2>
      </div>
    </div>
  );
}

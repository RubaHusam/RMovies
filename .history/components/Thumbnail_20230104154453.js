/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

export default function Thumbnail({ result }) {
  return (
    <div className='p-2 group cursor-pointer transition duration-200 eas-in transform '>
      <Image
        alt='The guitarist in the concert.'
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
        height={1080}
        width={1920}
      />
      <div classaName='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 eas-in-out hover:font-bold'>
          {result.title || result.original_title}
        </h2>
        <p className='flex item-center opacity-0 group-hover:opacity-100'>
          {result.media_type} .{''}
          {result.release_date || result.first_air_date} .{''}
          <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
        </p>
      </div>
    </div>
  );
}

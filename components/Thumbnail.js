/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef, useEffect, useState } from 'react';
import MovieDetailsModal from './Modals/MovieDetailsModal';

const Thumbnail = forwardRef(({ result, results }, ref) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          showModal={showModal}
          setShowModal={setShowModal}
          result={result}
          results={results}
        />
      )}
      <div
        ref={ref}
        className='p-2 group cursor-pointer transition duration-200 eas-in transform 
    sm:hover:scale-105 hover:z-40 '>
        {' '}
        <button onClick={() => setShowModal(true)}>
          <Image
            alt={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
            src={
              result.backdrop_path != null
                ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                : `https://image.tmdb.org/t/p/original/${result.poster_path}`
            }
            height={1080}
            width={1920}
          />

          <div classaName='p-2'>
            <p className='truncate max-w-md'>{result.overview}</p>
            <h2 className='mt-1 text-2xl text-white transition-all duration-100 eas-in-out hover:font-bold'>
              {result.title || result.original_name}
            </h2>
            <p className='flex item-center opacity-0 group-hover:opacity-100'>
              {result.media_type} •{' '}
              {result.release_date || result.first_air_date} •{''}
              <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
            </p>
          </div>
        </button>
      </div>{' '}
    </>
  );
});
export default Thumbnail;

import Image from 'next/image';
import React from 'react';
import MoviesCarousel from '../Carousels/MoviesCarousel';

export default function MovieDetailsModal({ showModal, setShowModal, result }) {
  return (
    <>
      {showModal ? (
        <>
          <div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-1920 my-6 mx-auto max-w-6xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <Image
                  className='brightness-50'
                  alt={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                  src={
                    result.backdrop_path != null
                      ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                      : `https://image.tmdb.org/t/p/original/${result.poster_path}`
                  }
                  height={1080}
                  width={1920}
                />
                <div className='fixed  w-1920'>
                  {/*header*/}

                  <div className='flex justify-between p-3 sm:p-5 border-b border-solid border-slate-200 rounded-t'>
                    <h3 className='text-lg sm:text-3xl font-semibold text-white'>
                      {result.media_type}
                    </h3>
                    <button
                      className='text-lg sm:text-xl font-semibold '
                      type='button'
                      onClick={() => setShowModal(false)}>
                      X
                    </button>
                  </div>
                  {/*body*/}
                  <div className='relative p-3 sm:p-6 flex-auto  '>
                    <p className='my-1 sm:my-4 sm:text-2xl font-bold leading-relaxed text-white'>
                      {result.title || result.original_name}
                    </p>
                    <p className='sm:my-4 sm:text-lg leading-relaxed text-white sm:w-3/5'>
                      {result.overview}
                    </p>
                  </div>

                  {/* Carousel */}
                  <MoviesCarousel result={result} />
                </div>
              </div>
            </div>
          </div>

          <div className='opacity-50 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

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

                  {/* carousel */}
                  <div className=''>
                    <div
                      id='animation-carousel'
                      className='relative'
                      data-carousel='static'>
                      <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
                        <div
                          className='hidden duration-200 ease-linear'
                          data-carousel-item>
                          <Image
                            height={80}
                            width={20}
                            alt={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                            src={
                              result.backdrop_path != null
                                ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                                : `https://image.tmdb.org/t/p/original/${result.poster_path}`
                            }
                            className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                          />
                        </div>
                        <div
                          className='hidden duration-200 ease-linear'
                          data-carousel-item>
                          <Image
                            height={80}
                            width={20}
                            alt={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                            src={
                              result.backdrop_path != null
                                ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                                : `https://image.tmdb.org/t/p/original/${result.poster_path}`
                            }
                            className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                          />
                        </div>

                        {/* Buttons */}
                        <button
                          type='button'
                          className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                          data-carousel-prev>
                          <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                            <svg
                              aria-hidden='true'
                              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M15 19l-7-7 7-7'></path>
                            </svg>
                            <span className='sr-only'>Previous</span>
                          </span>
                        </button>
                        <button
                          type='button'
                          className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                          data-carousel-next>
                          <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                            <svg
                              aria-hidden='true'
                              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M9 5l7 7-7 7'></path>
                            </svg>
                            <span className='sr-only'>Next</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
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

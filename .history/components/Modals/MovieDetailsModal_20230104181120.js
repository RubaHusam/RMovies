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
                <div className='fixed w-1920 h-1080'>
                  <div className='flex items-center justify-end  border-t border-solid border-slate-200 rounded-b'>
                    <button
                      className='text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setShowModal(false)}>
                      Close
                    </button>
                  </div>
                  {/*header*/}
                  <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                    <h3 className='text-3xl font-semibold'>Modal Title</h3>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setShowModal(false)}>
                      <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className='relative p-6 flex-auto'>
                    <p className='my-4 text-slate-500 text-lg leading-relaxed'></p>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}

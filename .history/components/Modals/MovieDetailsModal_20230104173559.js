import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default function MovieDetailsModal({ showModal, setShowModal, result }) {
  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-150 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-6xl'>
              {/*content*/}

              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*body*/}

                <div className='relative flex-auto'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
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
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'></div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}

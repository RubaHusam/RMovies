import Image from 'next/image';

export default function Thumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  // console.log(result);
  return (
    <div>
      {/* <img
        scr='https://image.tmdb.org/t/p/original//qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg'
        height={1080}
        width={1920}
        alt='..'
      /> */}
      <Image
        src='https://image.tmdb.org/t/p/original//qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg'
        alt='Landscape picture'
        width={800}
        height={500}
      />
    </div>
  );
}

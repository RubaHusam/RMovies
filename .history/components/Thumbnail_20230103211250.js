import Image from 'next/image';

export default function Thumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  // console.log(result);
  return (
    <div>
      <Image
        scr='https://image.tmdb.org/t/p/original//qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg'
        height={1080}
        width={1920}
        alt='..'
      />
    </div>
  );
}

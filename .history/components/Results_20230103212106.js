import Image from 'next/image';
import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div>
      <Image
        scr='image.tmdb.org/t/p/original//qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg'
        height={1080}
        width={1920}
        alt='..'
      />
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

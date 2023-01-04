import Image from 'next/image';
import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div>
      <Image
        alt='The guitarist in the concert.'
        src='https://image.tmdb.org/t/p/original//qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg'
        width={2250}
        height={1390}
      />
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

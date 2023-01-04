import Image from 'next/image';
import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2'>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

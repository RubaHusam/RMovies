import Image from 'next/image';
import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

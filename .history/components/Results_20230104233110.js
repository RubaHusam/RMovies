import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

export default function Movies({ results }) {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:px-5 md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} results={results} />
      ))}
    </FlipMove>
  );
}

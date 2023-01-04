import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
import MovieDetailsModal from './Modals/MovieDetailsModal';

export default function Movies({ results }) {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      <MovieDetailsModal
        result={results}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

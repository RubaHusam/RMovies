import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div>
      hi
      {results.map((result) => {
        <div>jjj</div>;
        {
          /* <Thumbnail key={result.id} result={result} />; */
        }
      })}
    </div>
  );
}

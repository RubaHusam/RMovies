import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div>
      hi
      {results.map((result) => {
        <div>{result}</div>;
        {
          /* <Thumbnail key={result.id} result={result} />; */
        }
      })}
    </div>
  );
}

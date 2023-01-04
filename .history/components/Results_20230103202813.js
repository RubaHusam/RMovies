import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div>
      hi
      {results.map((result) => {
        console.log(result);
        <Thumbnail key={result.id} result={result} />;
      })}
    </div>
  );
}

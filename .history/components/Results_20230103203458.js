import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div>
      hi2
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

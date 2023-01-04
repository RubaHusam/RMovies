import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div>
      hi
      {results.map((result) => {
        <Thumbnail />;
      })}
    </div>
  );
}

import Thumbnail from './Thumbnail';

export default function Movies({ results }) {
  return (
    <div>
      {results.map((result) => {
        <Thumbnail />;
      })}
    </div>
  );
}

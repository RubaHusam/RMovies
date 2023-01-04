import Thumbnall from './Thumbnall';

export default function Movies({ results }) {
  return (
    <div>
      {results.map((result) => {
        <Thumbnall />;
      })}
    </div>
  );
}

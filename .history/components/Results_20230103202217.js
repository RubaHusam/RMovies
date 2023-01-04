export default function Movies({ results }) {
  return (
    <div>
      {results.map((result) => {
        console.log(result);
      })}
    </div>
  );
}

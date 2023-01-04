export default function Movies({ request }) {
  return (
    <div>
      {request.map((result) => {
        console.log(result);
      })}
    </div>
  );
}

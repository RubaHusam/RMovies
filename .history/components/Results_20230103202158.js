export default function Movies({ requests }) {
  return (
    <div>
      {requests.map((result) => {
        console.log(result);
      })}
    </div>
  );
}

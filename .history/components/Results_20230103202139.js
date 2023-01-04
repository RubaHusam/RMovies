import requests from '../utils/requests';

export default function Movies({ request }) {
  return (
    <div>
      {requests.map((result) => {
        console.log(result);
      })}
    </div>
  );
}

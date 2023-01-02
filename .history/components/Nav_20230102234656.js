import requests from '../utils/requests';

export default function Nav() {
  return (
    <nav>
      <div className='flex'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className='cursor-pointer transition duration-100 transform  hover:text-white active:text-red-500'>
            {title}{' '}
          </h2>
        ))}
      </div>
    </nav>
  );
}

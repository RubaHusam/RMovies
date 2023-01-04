export default function Nav() {
  return (
    <nav>
      <div>
        {Object.entries(requests).map(([key, { title, url }]) => (
          // eslint-disable-next-line react/jsx-key
          <h2>{title} </h2>
        ))}
      </div>
    </nav>
  );
}

import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Movies from '../components/Movies';

export default function Home() {
  return (
    <>
      <Head>
        <title>RMoveis</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav />

      {/* Movies */}
      <Movies />
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests.genre?.url || requests.fetchTrending.url
    }`
  );
}

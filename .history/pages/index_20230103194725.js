import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Movies from '../components/Movies';
import requests from '../utils/requests';

export default function Home(props) {
  console.log(props);
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
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}

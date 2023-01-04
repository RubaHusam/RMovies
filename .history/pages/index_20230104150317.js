import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';
import Image from 'next/image';

export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>RMoveis</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image
        alt='The guitarist in the concert.'
        src='https://image.tmdb.org/t/p/original//qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg'
        width={2250}
        height={1390}
      />

      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={results} />
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

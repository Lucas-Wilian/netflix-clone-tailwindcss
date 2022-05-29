import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home - NetFlix</title>
      </Head>
      <Header />
      <main>
        <section></section>
      </main>
    </div>
  );
};

export default Home;
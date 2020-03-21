import Head from 'next/head';
import NavBar from '../components/NavBar';
import WarningBanner from '../components/WarningBanner';
import Statistics from '../components/Statistics';

const Home = () => (
  <div>
    <Head>
      <title>COVID-19 Tracker Maroc</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <Statistics />
    <WarningBanner />
  </div>
);

export default Home;

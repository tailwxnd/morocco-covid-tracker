import Head from 'next/head';
import NavBar from '../components/NavBar';
import WarningBanner from '../components/WarningBanner';
import Statistics from '../components/Statistics';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <Head>
      <title>COVID-19 Tracker Morocco</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <Statistics />
    <WarningBanner />
  </Layout>
);

export default Home;

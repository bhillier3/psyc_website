import Head from 'next/head';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Treatments from '../components/Treatments';
import Appointments from '../components/Appointments';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Smart Person LLC</title>
      </Head>
      <NavBar />
      <div className="sections">
        <HomePage />
        <About />
        <Treatments />
        <Appointments />
        <Contact />
      </div>
    </div>
  )
}
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
        <link href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <HomePage />
      <About />
      <Treatments />
      <Appointments />
      <Contact />
    </div>
  )
}
import Head from 'next/head';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import About from '../components/About';
import InfoSection from '../components/InfoSection';
import Treatments from '../components/Treatments';
import Appointments from '../components/Appointments';
import Info from '../components/Info';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Smart Person LLC</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap"
          rel="stylesheet">
        </link>
        <link 
        href="https://fonts.googleapis.com/css2?family=Junge&display=swap" rel="stylesheet">
        </link>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;500&display=swap" rel="stylesheet"></link>
        <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
      </Head>
      <NavBar />
      <HomePage />
      <div className="quote_wrapper">
        <h6 className="quote">
          You are not a drop in the ocean. You are the entire ocean in one drop.
        </h6>
        <p className="author">- Rumi -</p>
      </div>
      <About />
      <InfoSection />
      <Treatments />
      <Appointments />
      <Info />
      <Contact />
      <Footer />
    </div>
  )
}
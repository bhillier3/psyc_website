import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Neuroptimal() {

  return (
    <div className="container">
      <Head>
        <title>Smart Person LLC</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap"
          rel="stylesheet">
        </link>
      </Head>
      <NavBar />
      <img
        src="/images/neuroptimal_page.jpg"
        alt="photo"
      />
    </div>
  )
}
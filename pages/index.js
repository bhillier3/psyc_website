import Head from 'next/head'
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Smart Person LLC</title>
      </Head>
      <NavBar />
    </div>
  )
}
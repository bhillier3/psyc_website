import Head from 'next/head';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import nlp_styles from '../styles/info_pages.module.css';
import styles from '../styles/info.module.css';
import utils from '../styles/utils.module.css';

export default function NLP() {

  return (
    <div className={nlp_styles.wrapper}>
      <Head>
        <title>Smart Person LLC</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap"
          rel="stylesheet">
        </link>
      </Head>
      <NavBar />
      <div className={`${styles.wrapper} ${nlp_styles.container}`}>
        <img
          src="/images/neuroptimal_page.jpg"
          alt="photo"
          className={styles.image}
        />
        <div className={styles.container}>
          <p className={utils.small_title}>Neuroptimal</p>
          <p className={nlp_styles.text}>Neuroptimal is an improved type of neurofeedback. Electrons placed on your head connect your brain to an amplified software. The electrodes measure all of your brain waves and map them onto a computer screen. The software interprets your brain waves and then provides feedback to your brain. The feedback enables your brain to release any patterns that are not working properly and to be open to new patterns for your desirable outcome.Neuroptimal can help coordination and sports performance. Be the best you.</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
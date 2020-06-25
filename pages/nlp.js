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
          src="/images/NLP_page.jpg"
          alt="photo"
          className={styles.image}
        />
        <div className={styles.container}>
          <p className={utils.small_title}>NLP</p>
          <ul className={styles.list}>
            <li className={`${styles.li} ${nlp_styles.li}`}><b>Neuro</b>: related to the brain</li>
            <li className={`${styles.li} ${nlp_styles.li}`}>
              <b>Linguistic</b>: the language or self-talk we use
            </li>
            <li className={`${styles.li} ${nlp_styles.li}`}><b>Programming</b>: sequences and anchors our actions to achieve our desired outcome</li>
          </ul>
          <p className={nlp_styles.text}>Dr. Willson guides you through this process in addition to other treatment(s). She will help you build a skill to manage and combat your every day periods of negativity. Soon the skill will become a regular habit and significantly improve your well-being.</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
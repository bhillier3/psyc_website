import Head from 'next/head';
import NavBar from '../components/NavBar';
import styles from '../styles/nlp_page.module.css';

export default function NLP() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Person LLC</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap"
          rel="stylesheet">
        </link>
      </Head>
      <NavBar />
      <img
        src="/images/NLP_page.jpg"
        alt="photo"
        className={styles.image}
      />
      <div className={styles.text}>
        <p className={styles.title}>NLP is:</p>
        <ul className={styles.list}>
          <li className={styles.li}>Neuro: related to the brain</li>
          <li className={styles.li}>
            Linguistic: the language or self-talk we use
          </li>
          <li className={styles.li}>Programming: sequences and anchors our actions to achieve our desired outcome</li>
        </ul>
        <p>Dr. Willson guides you through this process in addition to other treatment(s). She will help you build a skill to manage and combat your every day periods of negativity. Soon the skill will become a regular habit and significantly improve your well-being.</p>
      </div>
    </div>
  )
}
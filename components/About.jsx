import styles from '../styles/about.module.css';
import utils from '../styles/utils.module.css';

const About = () => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={utils.section_title}>ABOUT</h3>
        <h1 className={styles.name}>SHAWN WILLSON M.D.</h1>
      </div>
    </section>
  )
}

export default About;
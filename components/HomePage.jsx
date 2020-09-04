import styles from '../styles/homescreen.module.css'

const HomePage = () => {

  return (
    <section className={styles.home}>
      <div className={styles.text_container}>
        <h1 className={styles.titlea}>SHAWN WILLSON M.D.</h1>
        <h2 className={styles.titleb}>
          Integrated Psychiatry of Western North Carolina
        </h2>
      </div>
      <button className={styles.button}>About Dr. Willson</button>
      <div className={styles.covid}>
        <h4 className={styles.covid_title}>COVID-19 UPDATE</h4>
        <p className={styles.covid_info}>Updated COVID information will be coming to the website shortly.</p>
      </div>
    </section>
  )
}

export default HomePage;
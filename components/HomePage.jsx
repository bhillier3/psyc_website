import styles from '../styles/homescreen.module.css'
import utils from '../styles/utils.module.css'

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
        <p className={styles.covid_info}>Dr. Willson is currently unavailable at this time and is not accepting new patients. If you are an existing patient and need refills or medication management, please call or text Dr. Randy Gergel at <b className={utils.underline}>828-450-7851</b>. Dr Gergel is covering for Dr. Willson's patients at this time.</p>
      </div>
    </section>
  )
}

export default HomePage;
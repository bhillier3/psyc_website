import styles from '../styles/homescreen.module.css'

const HomePage = () => {

  return (
    <section className={styles.home}>
      <div className={styles.text_container}>
        <h1 className={styles.titlea}>SHAWN WILLSON, M.D.</h1>
        <h2 className={styles.titleb}>INNOVATIVE PSYCHIATRIST</h2>
      </div>
      <button className={styles.button}>About Dr. Willson</button>
      <div className={styles.covid}>
        <p className={styles.covid_title}>COVID-19 UPDATE</p>
        <p className={styles.covid_info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam nisi dolor minus, suscipit repudiandae. Atque rem a temporibus vel repudiandae odit suscipit! Totam exercitationem impedit, dicta aliquam dignissimos et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam nisi dolor minus, suscipit repudiandae. Atque rem a temporibus vel repudiandae odit suscipit! Totam exercitationem impedit, dicta aliquam dignissimos et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam nisi dolor minus, suscipit repudiandae. Atque rem a temporibus vel repudiandae odit suscipit! Totam exercitationem impedit, dicta aliquam dignissimos et!</p>
      </div>
    </section>
  )
}

export default HomePage;
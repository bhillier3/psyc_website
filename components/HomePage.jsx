import styles from '../styles/homepage.module.css'

const HomePage = () => {

  return (
    <section className={styles.home}>
      {/* <img 
        src="/images/mountain_lake_background.jpg"
        className={styles.image}
        alt="mountain lake background"
      /> */}
      <div className={styles.text_container}>
        <h1 className={styles.titlea}>INNOVATIVE PSYCHIATRIST</h1>
        <h3 className={styles.titleb}>WITH</h3>
        <h2 className={styles.titlec}>STRONG TRADITIONAL ROOTS</h2>
      </div>
    </section>
  )
}

export default HomePage;
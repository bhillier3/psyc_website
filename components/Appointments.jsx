import styles from '../styles/appointments.module.css';
import utils from '../styles/utils.module.css';
import ScheduleButton from './ScheduleButton';

const Appointments = () => {

  return (
    <section className={styles.wrapper}>
      <h3 className={utils.section_title}>Pricing</h3>
      <div className={styles.pricing}>
        <div className={styles.individual}>
          <h5 className={styles.price_heading}>Individual Therapy</h5>
          <div className={styles.price_info}>
            <ul className={`${styles.list} ${styles.prices}`}>
              <li className={styles.li}>FREE</li>
              <li className={styles.li}>
                <span className={utils.strike}>$300 </span><span>$250</span>
              </li>
              <li className={styles.li}>$100</li>
              <li className={styles.li}>$200</li>
            </ul>
            <ul className={`${styles.list} ${styles.eval}`}>
              <li className={styles.li}>10 minute evaluation</li>
              <li className={styles.li}>Initial evaluation</li>
              <li className={styles.li}>Medicine check</li>
              <li className={styles.li}>Medicine check w/ psychotherapy</li>
            </ul>
          </div>
        </div>
        <div className={styles.group}>
          <h5 className={styles.price_heading}>Group Therapy</h5>
          <div className={styles.price_info}>
            <ul className={`${styles.list} ${styles.prices}`}>
              <li className={styles.li}>....</li>
              <li className={styles.li}>....</li>
            </ul>
            <ul className={`${styles.list} ${styles.eval}`}>
              <li className={styles.li}>First session</li>
              <li className={styles.li}>All other sessions</li>
            </ul>
          </div>
        </div>
      </div>
      <ScheduleButton styles={styles.button}/>
    </section>
  )
}

export default Appointments;
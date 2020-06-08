import styles from '../styles/info.module.css';
import utils from '../styles/utils.module.css';
import Link from 'next/link';

const Info = () => {

  return (
    <section className={styles.wrapper}>
      <img
        className={styles.image}
        src="/images/chair_book.jpg"
        alt="a picture of a chair and desk"
      />
      <div className={styles.container}>
        <h3 className={utils.small_title}>Patient Information</h3>
        <ul className={styles.list}>
          <li className={styles.li}>
            <h5>What forms of payment are accepted?</h5>
            <p>Cash and credit card payments are accepted.</p>
            <p>Credit card information must be collected prior to your initial appointment.</p>
          </li>
          <li className={styles.li}>
            <h5>Can I cancel my appointment?</h5>
            <p>Yes, but you must cancel 24 hours prior to your appointment.</p>
            <p>You will be charged a cancellation fee if you cancel within 24 hours of your appointment.</p>
          </li>
          <li className={styles.li}>
            <h5>Do you accept insurance?</h5>
            <p>Medicare is the only accepted form of insurace.</p>
          </li>
          <li className={styles.li}>
            <h5>Do I need to fill out any forms prior to my appointment?</h5>
            <p>Yes, you must fill out all of the required forms prior to your first appointment.</p>
            <p>
              <span>The required forms can be found </span>
              <span><Link href="/"><a>here</a></Link></span>
              <span>.</span>
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h3 className={utils.small_title}>Contact</h3>
        <ul className={styles.list}>
            <li className={styles.li}>
              <h5>Stuff</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora!</p>
            </li>
            <li className={styles.li}>
              <h5>Stuff</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora!</p>
            </li>
            <li className={styles.li}>
              <h5>Stuff</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora!</p>
            </li>
            <li className={styles.li}>
              <h5>Stuff</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tempora!</p>
            </li>
          </ul>
      </div>
      <img
        src="/"
        alt="google maps"
      />
    </section>
  )
}

export default Info;
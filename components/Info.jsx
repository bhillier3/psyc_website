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
            <h5>Do you accept insurance?</h5>
            <p>Medicare is the only accepted form of insurace.</p>
            <p>Dr. Willson performs a thorough, comprehensive assessment of each patient which is clearly documented on the patient's superbill (receipt) for their insurance provider. We can then assist in getting you a generous reimbursement from your insurance.</p>
          </li>
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
            <h5>Do I need to fill out any forms prior to my appointment?</h5>
            <p>Yes, you must fill out all of the required forms prior to your first appointment.</p>
            <p>
              <span>
                The required forms can be found <Link href="/"><a>here</a></Link>.
              </span>
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h3 className={utils.small_title}>Contact</h3>
        <ul className={styles.list}>
            <li className={styles.li}>
              <h5>How can I schedule an appointment?</h5>
              <p>
                <span>
                  You can schedule your appointment with Simple Practice <Link href="/"><a>here</a></Link>.
                </span>
              </p>
              <p>You can also call the office at <b>828-549-8082</b> to schedule appointments by phone.</p>
            </li>
            <li className={styles.li}>
              <h5>What if it's an emergency?</h5>
              <p>If you require urgent care you may contact Dr. Willson directly at <em>913-948-1340</em>.</p>
              <p>Continual and repeated contact to Dr. Willson can result in incurred fees.</p>
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
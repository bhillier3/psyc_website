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
              <h5>Schedule An Appointment</h5>
              <p>
                <span>
                  It is preferred that you schedule your appointment online with Simple Practice <a
                    href="https://shawn-willson.clientsecure.me"
                    data-spwidget-scope-id="f4031c84-3037-422a-9b5f-2e9c4cf6237a"
                    data-spwidget-scope-uri="shawn-willson" data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" data-spwidget-scope-global
                    data-spwidget-autobin
                  >
                    here
                  </a>.
                </span>
              </p>
              <p>You can also call the office at <b className={utils.underline}>828-549-8082</b> to schedule appointments by phone.</p>
            </li>
            <li className={styles.li}>
              <h5>Crisis Situations</h5>
              <p>If it's an urgent matter you may call or text Dr. Willson directly at <b className={utils.underline}>913-948-1340</b>.</p>
              <p>Non-urgent calls and texts to Dr. Willson during non-business hours will result in additional fees.</p>
            </li>
            <li className={styles.li}>
              <h5>Hours</h5>
              <p>8am - 5:30pm | Monday - Friday</p>
            </li>
            <li className={styles.li}>
              <h5>Address</h5>
              <p>840 Suite 5 Fleming St., Hendersonville, NC 28791</p>
            </li>
          </ul>
        {/* <div class="spwidget-button-wrapper"><a href="https://shawn-willson.clientsecure.me" class="spwidget-button" data-spwidget-scope-id="f4031c84-3037-422a-9b5f-2e9c4cf6237a" data-spwidget-scope-uri="shawn-willson" data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" data-spwidget-scope-global data-spwidget-autobind>Request Appointment</a></div> */}
      </div>
      <img
        src="/"
        alt="google maps"
      />
    </section>
  )
}

export default Info;
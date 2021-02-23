import styles from '../styles/info.module.css';
import utils from '../styles/utils.module.css';
import GoogleMapReact from 'google-map-react';

const Contact = () => {

  return (
    <section className={styles.wrapper}>
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
            {/* <p className={styles.fax}><strong>
              Fax #</strong>: <b className={utils.underline}>828-519-5072</b>
            </p> */}
          </li>
          <li className={styles.li}>
            <h5>Crisis Situations</h5>
            <p>If it's an urgent matter you may call or text Dr. Willson directly at <b className={utils.underline}>913-948-1340</b>.</p>
            {/* <p>Non-urgent calls and texts to Dr. Willson during non-business hours will result in additional fees.</p> */}
          </li>
          <li className={styles.li}>
            <h5>Hours</h5>
            <p>8am - 5:30pm | Monday - Friday</p>
          </li>
          <li className={styles.li}>
            <h5>Mailing Address</h5>
            <p>7920 Foster Street, Overland Park, KS 66204</p>
          </li>
        </ul>
        {/* <div class="spwidget-button-wrapper"><a href="https://shawn-willson.clientsecure.me" class="spwidget-button" data-spwidget-scope-id="f4031c84-3037-422a-9b5f-2e9c4cf6237a" data-spwidget-scope-uri="shawn-willson" data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" data-spwidget-scope-global data-spwidget-autobind>Request Appointment</a></div> */}
      </div>
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={{ lat: 35.3172024, lng: -82.4636343 }}
          defaultZoom={ 18 }
        >
        </GoogleMapReact>
      </div>
      {/* <img
        src="/"
        alt="google maps"
      /> */}
    </section>
  )
}

export default Contact;
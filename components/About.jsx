import styles from '../styles/about.module.css';
import utils from '../styles/utils.module.css';
import ScheduleButton from './ScheduleButton';

const About = () => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.about}>ABOUT</h3>
        <h1 className={styles.name}>SHAWN WILLSON M.D.</h1>
        <p className={styles.line}></p>
      </div>
      <div className={styles.aboutme}>
        {/* <h4 className={styles.about_header}>Lorem ipsum dolor sit?</h4> */}
        <p className={styles.about_text}>She has practiced since 1990. She started in OBGYN but soon felt drawn to helping her postpartum patients who were suffering from depression. She asked herself, "how could such an exciting moment as having a baby become so tragic?" And with that, she layed her forceps down and has not looked back. She has never lost her passion for understanding the brain.<br/>There are three powerful principles she always keeps in mind:</p>
        <ol className={styles.about_list}>
          <li className={styles.about_li}>It is never just one thing.</li>
          <li className={styles.about_li}>Always be curious.</li>
          <li className={styles.about_li}>Listen closely to your patient, they have a lot to tell you.</li>
        </ol>
        <div className={styles.lists_wrapper}>
          <div>
            <h4>Education</h4>
            <ul className={styles.list}>
              <li className={styles.li}>
                <p className={styles.li_bold}>Dartmouth-Hitchcock Medical Center</p>
                <p>Fellowship, Forensic Psychiatry</p>
              </li>
              <li className={styles.li}>
                <p className={styles.li_bold}>University of Colorado</p>
                <p>Fellowship, Addiction Psychiatry</p>
              </li>
              <li className={styles.li}>
                <p className={styles.li_bold}>Harvard Medical School</p>
                <p>Fellowship, Medicine</p>
              </li>
              <li className={styles.li}>
                <p className={styles.li_bold}>Emory University</p>
                <p>Residency, Psychiatry</p>
              </li>
              <li className={styles.li}>
                <p className={styles.li_bold}>
                  University of Missouri - Kansas City School of Medicine
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.specialties}>
            <h4>Specialties</h4>
            <ul className={styles.list}>
              <li className={styles.li}><p>Addiction</p></li>
              <li className={styles.li}><p>Traumatic Brain Injury</p></li>
              <li className={styles.li}><p>Sports Performance</p></li>
              <li className={styles.li}><p>Adrenal Insufficiency</p></li>
              <li className={styles.li}><p>Women's Health and Hormones</p></li>
              <li className={styles.li}><p>Pregnancy and Postpartum</p></li>
              <li className={styles.li}><p>Forensics</p></li>
            </ul>
          </div>
        </div>
        <ScheduleButton styles={styles.button}/>
      </div>
      <img
        className={styles.image}
        src="/images/profile.jpg"
        alt="Shawn Willson Profile Picture"
      />
    </section>
  )
}

export default About;
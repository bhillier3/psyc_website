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
        <p className={styles.about_text}>Dr. Willson started her career in OB-GYN in 1990 but soon gave up her forceps when she had a mother’s inability to even hold her newborn baby because of her sense of unworthiness. “This is usually the happiest day of a mother’s life.”</p>
        <p className={styles.about_text}>I felt a passion and a calling to study the brain and after twenty eight years have never lost that curiosity and amazement. I do this by first getting to know your story. Then I do the needed lab work specific for you such as Cortisol and DHEA, genetic testing, mood, anxiety and cognitive screening, neurotransmitter testing, relationship patterns, nutrition, brain mapping and more. For example you might be suffering from a resistant depression, tried every antidepressant to find out it is a cortisol deficiency. I have combined traditional care, such as medications with complementary treatments, to ensure I provide the very sources for resolution.</p>
        {/* <ol className={styles.about_list}>
          <li className={styles.about_li}>It is never just one thing.</li>
          <li className={styles.about_li}>Always be curious.</li>
          <li className={styles.about_li}>Listen closely to your patient, they have a lot to tell you.</li>
        </ol> */}
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
              <li className={styles.li}><p>Bipolar</p></li>
              <li className={styles.li}><p>Depression</p></li>
              <li className={styles.li}><p>Trauma</p></li>
              <li className={styles.li}><p>Anxiety</p></li>
              <li className={styles.li}><p>LGBT</p></li>
              <li className={styles.li}><p>Attention Deficit</p></li>
              <li className={styles.li}><p>Addiction</p></li>
              <li className={`${styles.li} ${styles.soon}`}>
                <p><strong>Coming Soon</strong>: Sports Performance!</p>
              </li>
            </ul>
          </div>
          <div className={styles.specialties}>
            <h4>Subspecialties</h4>
            <ul className={styles.list}>
              <li className={styles.li}><p>Pregnancy</p></li>
              <li className={styles.li}><p>Perimenopause</p></li>              <li className={styles.li}><p>Geriatric</p></li>
              <li className={styles.li}><p>Head Trauma</p></li>
            </ul>
          </div>
        </div>
        <p className={styles.schedule_text}>Let's get going! Schedule an appointment today!</p>
        <p className={styles.schedule_info}>We offer same day appointments for urgent needs and house calls when appropriate.</p>
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
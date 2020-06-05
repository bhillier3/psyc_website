import styles from '../styles/about.module.css';
import utils from '../styles/utils.module.css';
import ScheduleButton from './ScheduleButton';

const About = () => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={utils.section_title}>ABOUT</h3>
        <h1 className={styles.name}>SHAWN WILLSON, M.D.</h1>
        <p className={styles.line}></p>
      </div>
      <div className={styles.aboutme}>
        <h4 className={styles.about_header}>Lorem ipsum dolor sit?</h4>
        <p className={styles.about_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta culpa cum, mollitia ex error non nobis iste pariatur porro accusamus corporis, repellendus debitis aliquid, itaque eos incidunt blanditiis! Suscipit, autem accusamus deserunt hic et nihil vitae asperiores numquam ipsa sint enim. In vero, temporibus impedit praesentium atque reiciendis alias distinctio ab. Facilis velit saepe aperiam eius, rem numquam eligendi tempora dolor pariatur! Odio excepturi, sed harum sint omnis illum atque alias hic molestiae qui repellat nesciunt ea corrupti ipsum aliquam incidunt tenetur, perspiciatis quia ad aliquid tempora. Sed tempore repellat quam ea voluptate impedit, eos culpa omnis maiores in.</p>
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
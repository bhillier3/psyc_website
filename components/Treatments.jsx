import styles from '../styles/treatments.module.css';
import utils from '../styles/utils.module.css';
import Link from 'next/link';

const Treatments = () => {

  return (
    <section className={styles.wrapper}>
      {/* <h3 className={utils.section_title}>Treatments and Evaluations</h3> */}
      {/* <p className={styles.line}></p> */}
      <div className={styles.eval}>
        <h4 className={styles.heading}>Comprehensive Evaluation</h4>
        <p>To guide you out of your stress state, Dr. Willson will use a broad net to capture all possible causes such as labs, screens, and genetic testing. Your condition will only improve once we get to the root(s) of it. She prefers that signifcant others are available at the time of the appointment as sometimes the patient's state limits their insight. We will look at more than one choice for treatment and that match your values. Treatments usually include medication(s), supplements, nutrition, rewiring through neuroptimal or through new skills, spirituality, exercise, and satisfaction with relationships.</p>
      </div>
      <p className={styles.divider}></p>
      <div className={styles.treatments}>
        <div>
          <h4 className={styles.heading}>Alternative Treatments</h4>
          <ul className={styles.list}>
            <li className={styles.li}>
              <Link href="/"><a>Neurolinguistic Programming</a></Link>
            </li>
            <li className={styles.li}>
              <Link href="/"><a>Neuroptimal</a></Link>
            </li>
            <li className={styles.li}>Medical-Grade Supplements</li>
          </ul>
        </div>
        <div>
          <h4 className={styles.heading}>Traditional Treatments</h4>
          <ul className={styles.list}>
            <li className={styles.li}>Antidepressants</li>
            <li className={styles.li}>Mood Stabilizers</li>
            <li className={styles.li}>Antipsychotics</li>
            <li className={styles.li}>Stimulants</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Treatments;
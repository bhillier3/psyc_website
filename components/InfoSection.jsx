import styles from '../styles/info_section.module.css';
import utils from '../styles/utils.module.css';

const InfoSection = () => {

  return (
    <div className={styles.container}>
      <h3 className={`${utils.section_title} ${styles.title}`}>
        The Quality of Your Mental Health
      </h3>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <img
            className={styles.image}
            src="/images/brain.jpg"
            alt="picture of a brain (not real)"
          />
          <div className={styles.text}>
            <h5>Brain</h5>
            <p>Neuroplasticity: the brain has a negative bias to protect us but stops serving us; these patterns can be broken and rewired into positive ones.</p>
          </div>
        </div>
        <div className={styles.section}>
          <img
            className={styles.image}
            src="/images/lonely.jpg"
            alt="person standing on beach with sunrise"
          />
          <div className={styles.text}>
            <h5>Mood, Anxiety and Addicition</h5>
            <p>There are more than 235 genes associated with bipolar, many types of anxiety, and addicition. Addiction is when you're stuck in a maladpative behavior and it doesn't mean you are a bad person.</p>
          </div>
        </div>
        <div className={styles.section}>
          <img
            className={styles.image}
            src="/images/hormones.jpg"
            alt="different colored test tubes"
          />
          <div className={styles.text}>
            <h5>Hormones and Vitamins</h5>
            <p>Hormones and vitamins bring the mind and body together as one. They need to be in an ideal range or we can feel moody, lack libido, and lose the capacity to manage stress.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection;
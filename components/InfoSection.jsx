import styles from '../styles/info_section.module.css';
import utils from '../styles/utils.module.css';

const InfoSection = () => {

  return (
    <div className={styles.container}>
      <h3 className={`${utils.section_title} ${styles.title}`}>
        Contributing Factors To Mood And Anxiety
      </h3>
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src="/images/brain.jpg"
          alt="picture of a brain (not real)"
        />
        <img
          className={styles.image}
          src="/images/hormones.jpg"
          alt="different colored test tubes"
        />
        <img
          className={styles.image}
          src="/images/lonely.jpg"
          alt="person standing on beach with sunrise"
        />
        <div className={styles.text}>
          <h5>The Brain</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia minima ipsa eveniet temporibus, nisi nam labore provident illum velit, numquam praesentium cum assumenda, ipsum ducimus alias magnam. Molestiae repellendus aliquid dignissimos officiis eum perferendis omnis laboriosam obcaecati. Voluptatem accusamus atque, ut reiciendis cum, expedita libero velit sit rem, voluptas magni?</p>
        </div>
        <div className={styles.text}>
          <h5>Chemical Imbalance</h5>
          <ul className={styles.list}>
            <li className={styles.li}>Cortisol</li>
            <li className={styles.li}>Estrogen</li>
            <li className={styles.li}>Thryoid</li>
            <li className={styles.li}>Vitamins D, B6 and B12</li>
          </ul>
        </div>
        <div className={styles.text}>
          <h5>Trauma and Stress</h5>
          <ul className={styles.list}>
            <li className={styles.li}>Concussion</li>
            <li className={styles.li}>Relationships</li>
            <li className={styles.li}>Family</li>
            <li className={styles.li}>Chronic illness or injury</li>
            <li className={styles.li}>Job</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InfoSection;
import styles from '../styles/info_section.module.css';

const InfoSection = () => {

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src="/images/"
        alt="picture of a brain (not real)"/>
      <img
        className={styles.image}
        src="/images/hormones.jpg"
        alt="different colored test tubes"/>
      <img
        className={styles.image}
        src="/images/ocean_mood.jpg"
        alt="person standing on beach with sunrise"/>
      <div className={styles.text}>
        <h5>The Brain</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia minima ipsa eveniet temporibus, nisi nam labore provident illum velit, numquam praesentium cum assumenda, ipsum ducimus alias magnam. Molestiae repellendus aliquid dignissimos officiis eum perferendis omnis laboriosam obcaecati. Voluptatem accusamus atque, ut reiciendis cum, expedita libero velit sit rem, voluptas magni?</p>
      </div>
      <div className={styles.text}>
        <h5>Hormones</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia minima ipsa eveniet temporibus, nisi nam labore provident illum velit, numquam praesentium cum assumenda, ipsum ducimus alias magnam. Molestiae repellendus aliquid dignissimos officiis eum perferendis omnis laboriosam obcaecati. Voluptatem accusamus atque, ut reiciendis cum, expedita libero velit sit rem, voluptas magni?</p>
      </div>
      <div className={styles.text}>
        <h5>Mood and Anxiety</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia minima ipsa eveniet temporibus, nisi nam labore provident illum velit, numquam praesentium cum assumenda, ipsum ducimus alias magnam. Molestiae repellendus aliquid dignissimos officiis eum perferendis omnis laboriosam obcaecati. Voluptatem accusamus atque, ut reiciendis cum, expedita libero velit sit rem, voluptas magni?</p>
      </div>
    </div>
  )
}

export default InfoSection;
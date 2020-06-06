import styles from '../styles/treatments.module.css';
import utils from '../styles/utils.module.css';
import Link from 'next/link';

const Treatments = () => {

  return (
    <section className={styles.wrapper}>
      <h3 className={utils.section_title}>Treatments and Evaluations</h3>
      <p className={styles.line}></p>
      <div className={styles.eval}>
        <h4 className={styles.heading}>Comprehensive Evaluation</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta, tenetur cum voluptatum aliquam earum autem, enim illo nemo sit, fugiat laboriosam consectetur accusamus? Earum quos laboriosam illo sed, ut voluptates nobis enim vero minima! Architecto consectetur perspiciatis voluptates libero neque dicta, iusto aspernatur ex eos quos, numquam quia facilis tenetur laborum magni odio et aperiam suscipit quidem. Harum quia in, alias fuga hic accusantium libero voluptas veritatis temporibus porro aliquam maiores, excepturi, tenetur sapiente est. Impedit, eligendi labore? Id tempore voluptates aperiam facere debitis, quod ad soluta deleniti, est ipsum accusamus eaque omnis repellendus maiores maxime sit, blanditiis quae a dolorum illum neque? Nulla numquam fugiat, dolore quidem optio sint consectetur deleniti autem doloribus non, architecto qui molestias! Necessitatibus, cupiditate dolore soluta odio magni aliquam exercitationem neque praesentium illum ipsum deserunt. Reiciendis sit hic iusto quam nisi obcaecati, harum vel exercitationem natus dignissimos quisquam! Cumque assumenda similique officiis itaque nam! Veritatis sit pariatur quo odit tempore iusto assumenda, non ea? Maxime iste, recusandae facere officiis neque adipisci nesciunt nulla maiores repellat quaerat, ut possimus! Iure possimus unde quisquam ab, libero nam sit vitae porro commodi velit amet est quis architecto ducimus laboriosam pariatur voluptatibus rem tempora inventore sint a!</p>
      </div>
      <p className={styles.divider}></p>
      <div>
        <h4 className={styles.heading}>Alternative Treatments</h4>
        <ul className={styles.list}>
          <li className={styles.li}>
            <Link><a href="/">Neurolinguistic Programming</a></Link>
          </li>
          <li className={styles.li}>
            <Link><a href="/">Neuroptimal</a></Link>
          </li>
          <li className={styles.li}>High Quality Supplements</li>
        </ul>
      </div>
    </section>
  )
}

export default Treatments;
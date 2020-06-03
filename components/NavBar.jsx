import Link from 'next/link';
import styles from '../styles/navbar.module.css'

const NavBar = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <p className={styles.info}>
          828-549-8082 | 840 Suite 5 Fleming St., Hendersonville, NC 28791
        </p>
        <h3 className={styles.logo}>THE SMART PERSON</h3>
        <ul className={styles.list}>
          <li className={styles.li}><Link href="/">
            <a className={styles.link}>Home</a>
          </Link></li>
          <li className={styles.li}><Link href="/about">
            <a className={styles.link}>About</a>
          </Link></li>
          <li className={styles.li}><Link href="/treaments">
            <a className={styles.link}>Treatments</a>
          </Link></li>
          <li className={styles.li}><Link href="/appointments">
            <a className={styles.link}>Appointments</a>
          </Link></li>
          <li className={styles.li}><Link href="/contact">
            <a className={styles.link}>Contact</a>
          </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
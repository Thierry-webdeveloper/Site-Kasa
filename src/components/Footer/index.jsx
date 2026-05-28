import logo from '../../assets/logo-white.svg'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Kasa" className={styles.logo} />
      <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
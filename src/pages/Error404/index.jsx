import { Link } from 'react-router-dom'
import errorDesktop from '../../assets/Error404-desktop.jpg'
import errorMobile from '../../assets/Error404-mobile.jpg'
import styles from './Error404.module.scss'

function Error404() {
  return (
    <main className={styles.error404}>
      <img
        src={errorDesktop}
        alt=""
        className={styles.imageDesktop}
      />
      <img
        src={errorMobile}
        alt=""
        className={styles.imageMobile}
      />
      <p className={styles.message}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.link}>
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default Error404
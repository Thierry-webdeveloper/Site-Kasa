import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/"><img src={logo} alt="Kasa" className={styles.logo} /></NavLink>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
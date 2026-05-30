import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

function Card({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} className={styles.card}>
      <img src={cover} alt={title} className={styles.image} />
      <div className={styles.overlay}></div>
      <p className={styles.title}>{title}</p>
    </Link>
  )
}

export default Card
import { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import styles from './Collapse.module.scss'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.collapse}>
      <button
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.title}>{title}</span>
        <img
          src={arrow}
          alt=""
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
        />
      </button>

      {isOpen && (
        <div className={styles.content}>
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse
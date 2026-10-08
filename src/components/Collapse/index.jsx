import { useState, useId } from 'react'
import arrow from '../../assets/arrow.svg'
import styles from './Collapse.module.scss'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId() // identifiant unique, relie le bouton à son contenu

  return (
    <div className={styles.collapse}>
      <button
        type="button"
        aria-controls={contentId}
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
        <div id={contentId} className={styles.content}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Collapse
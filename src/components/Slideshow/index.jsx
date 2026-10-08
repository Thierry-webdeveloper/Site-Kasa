import { useState } from 'react'
import styles from './Slideshow.module.scss'
import arrowImg from '../../assets/arrow.svg'

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = pictures.length

  function showPrev() {
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1)
  }

  function showNext() {
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1)
  }

  // Flèches gauche / droite du clavier, quand le focus est dans le carrousel
  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrev()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  return (
    <section
      className={styles.slideshow}
      aria-roledescription="carrousel"
      aria-label={`Photos du logement ${title}`}
      onKeyDown={total > 1 ? handleKeyDown : undefined}
    >
      <img
        src={pictures[currentIndex]}
        alt={`${title}, photo ${currentIndex + 1} sur ${total}`}
        className={styles.image}
      />

      {total > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowBack}`}
            onClick={showPrev}
            aria-label="Photo précédente"
          >
            <img src={arrowImg} alt="" />
          </button>

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowForward}`}
            onClick={showNext}
            aria-label="Photo suivante"
          >
            <img src={arrowImg} alt="" />
          </button>

          {/* Compteur visible (masqué sur mobile par la maquette) */}
          <p className={styles.counter} aria-hidden="true">
            {currentIndex + 1} / {total}
          </p>

          {/* Annonce pour les lecteurs d'écran, sur tous les écrans */}
          <p className={styles.srOnly} aria-live="polite">
            Photo {currentIndex + 1} sur {total}
          </p>
        </>
      )}
    </section>
  )
}

export default Slideshow
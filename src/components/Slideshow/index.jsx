import { useState } from 'react'
import styles from './Slideshow.module.scss'
import arrowImg from '../../assets/arrow.svg'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function handlePrev() {
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1)
  }

  function handleNext() {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className={styles.slideshow}>
      <img
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1} sur ${pictures.length}`}
        className={styles.image}
      />

      {pictures.length > 1 && (
        <>
          <button className={`${styles.arrow} ${styles.arrowBack}`} onClick={handlePrev}>
            <img src={arrowImg} alt="Image précédente" />
          </button>

          <button className={`${styles.arrow} ${styles.arrowForward}`} onClick={handleNext}>
            <img src={arrowImg} alt="Image suivante" />
          </button>

          <p className={styles.counter}>
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Slideshow
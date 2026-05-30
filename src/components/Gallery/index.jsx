import styles from './Gallery.module.scss'

function Gallery({ children }) {
  return (
    <section className={styles.gallery}>
      {children}
    </section>
  )
}

export default Gallery
import styles from './Banner.module.scss'

function Banner({ imageUrl, alt = '', children }) {
  return (
    <section className={styles.banner}>
      <img src={imageUrl} alt={alt} className={styles.image} />
      <div className={styles.overlay}></div>
      {children && <p className={styles.text}>{children}</p>}
    </section>
  )
}

export default Banner
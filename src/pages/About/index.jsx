import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import aboutData from '../../data/about.json'
import aboutBanner from '../../assets/about-banner.jpg'
import styles from './About.module.scss'

function About() {
  return (
    <main className={styles.about}>
      <Banner imageUrl={aboutBanner} alt="Bannière page À propos" overlayOpacity={0.3} />

      <ul className={styles.collapseList}>
        {aboutData.map((item) => (
          <li key={item.title}>
            <Collapse title={item.title} content={item.content} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default About
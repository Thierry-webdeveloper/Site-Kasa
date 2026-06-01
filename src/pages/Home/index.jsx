import bannerImage from '../../assets/home-banner.jpg'
import logements from '../../data/logements.json'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import Card from '../../components/Card'
import styles from './Home.module.scss'

function Home() {
  return (
    <main className={styles.home}>
      <Banner imageUrl={bannerImage} alt="Bannière page Accueil" overlayOpacity={0.6} >
        Chez vous, partout et ailleurs
      </Banner>

      <Gallery>
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </Gallery>
    </main>
  )
}

export default Home
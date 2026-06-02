import logements from '../../data/logements.json'
import Slideshow from '../../components/Slideshow'
import styles from './Logement.module.scss'

function Logement() {
  const logement = logements[1] // temporaire — remplacé par useParams à l'étape 8

  return (
    <main className={styles.logement}>
      <Slideshow pictures={logement.pictures} />
    </main>
  )
}

export default Logement
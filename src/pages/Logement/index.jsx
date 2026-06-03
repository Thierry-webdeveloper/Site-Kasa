import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import styles from './Logement.module.scss'
import starFull from '../../assets/star-full.svg'
import starEmpty from '../../assets/star-empty.svg'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  return (
    <main className={styles.logement}>
      {/* Carrousel */}
      <Slideshow pictures={logement.pictures} />

      {/* Bandeau : titre + localisation à gauche / hôte + étoiles à droite */}
      <div className={styles.infos}>

        <div className={styles.infoLeft}>
          <h1 className={styles.title}>{logement.title}</h1>
          <p className={styles.location}>{logement.location}</p>

          {/* Tags */}
          <ul className={styles.tags}>
            {logement.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.infoRight}>
          {/* Hôte */}
          <div className={styles.host}>
            <p className={styles.hostName}>
              {logement.host.name.split(' ').map((part) => (
                <span key={part}>{part}</span>
              ))}
            </p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className={styles.hostPicture}
            />
          </div>

          {/* Étoiles */}
          <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={star <= parseInt(logement.rating) ? starFull : starEmpty}
                alt=""
              />
            ))}
          </div>
        </div>

      </div>

      {/* Collapses : description + équipements côte à côte */}
      <div className={styles.collapses}>
        <Collapse
          title="Description"
          content={logement.description}
        />
        <Collapse
          title="Équipements"
          content={logement.equipments}
        />
      </div> 
    </main>
  )
}

export default Logement
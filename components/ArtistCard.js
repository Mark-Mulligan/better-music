import Image from 'next/image';
import styles from './ArtistCard.module.css';

const ArtistCard = ({ name, genre, src, alt }) => {
  return (
    <div className={styles.artistCard}>
      <div className={styles.cardHeader}>
        <Image objectFit="cover" layout="fill" src={src} alt={alt} />
      </div>
      <div className={styles.cardBody}>
        <h4>{name}</h4>
        <p>{genre}</p>
      </div>
    </div>
  );
};

export default ArtistCard;

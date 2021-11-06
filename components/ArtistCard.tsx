import Image from 'next/image';
import styles from '../styles/ArtistCard.module.scss';
import Link from 'next/link';

interface ArtistCardProps {
  id: string;
  name: string;
  genre: string;
  src: string;
  alt: string;
}

const ArtistCard = ({ id, name, genre, src, alt }: ArtistCardProps) => {
  return (
    <div className={styles.artistCard} id={id}>
      <div className={styles.cardHeader}>
        <Image
          blurDataURL={src}
          placeholder="blur"
          objectFit="cover"
          layout="fill"
          objectPosition="center top"
          src={src}
          alt={alt}
          lazyBoundary="800px"
        />
      </div>
      <div className={styles.cardBody}>
        <h4>{name}</h4>
        <p>{genre}</p>
        <Link href={`/artists/${id}`}>
          <a className="btn block btn-dark">View Artist Page</a>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;

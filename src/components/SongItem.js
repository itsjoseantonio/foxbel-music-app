// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../styles/components/SongItem.module.scss';

const ItemSong = ({ image, name, artist }) => {
    return (
        <div className={styles.songItem}>
            <div className={styles.songItem__image}>
                <img src={image} alt="" />
                <FontAwesomeIcon icon={faPlay} />
            </div>
            <div className={styles.songItem__text}>
                <p>{name}</p>
                <span>{artist}</span>
            </div>
            <div className={styles.songItem__options}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default ItemSong;

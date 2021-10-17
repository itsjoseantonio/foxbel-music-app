// Styles //
import styles from '../styles/components/SongItem.module.scss';

const ItemSong = ({ image, name, artist }) => {
    return (
        <div className={styles.songItem}>
            <div className={styles.songItem__image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.songItem__info}>
                <p>{name}</p>
                <span>{artist}</span>
            </div>
        </div>
    );
};

export default ItemSong;

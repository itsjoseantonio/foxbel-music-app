// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../styles/components/TopSongItem.module.scss';

const TopItemSong = ({ children, id, image, name, artist, handleItem }) => {
    return (
        <div className={styles.topSongItem}>
            <div
                className={styles.topSongItem__image}
                data-id={id}
                onClick={handleItem}
            >
                <img src={image} alt="" />
                <FontAwesomeIcon icon={faPlay} />
            </div>
            <div className={styles.topSongItem__text}>
                <div className={styles.title}>
                    <h2>{name}</h2>
                    <p>{`Lo mejor de ${artist}`}</p>
                </div>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore minus nobis enim id tempora quibusdam quod
                        veniam delectus debitis! Facilis, debitis veritatis
                        doloremque suscipit non ex ipsum sit laudantium ullam?
                    </p>
                </div>
                <div className={styles.actions}>{children}</div>
            </div>
        </div>
    );
};

export default TopItemSong;

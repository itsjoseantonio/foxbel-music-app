// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../../styles/components/player/Index.module.scss';

import image from '../../assets/images/avatar.png';

const Player = () => {
    return (
        <div className={styles.player}>
            <div className={styles.details}>
                <div className={styles.details__image}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.details__text}>
                    <p>Canción</p>
                    <span>Artista - Álbum</span>
                </div>
            </div>
            <div className={styles.controls}>
                <button>
                    <FontAwesomeIcon icon={faStepBackward} />
                </button>
                <button className={styles.controls__play}>
                    <FontAwesomeIcon icon={faPlay} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
            </div>
            <div className={styles.volume}></div>
        </div>
    );
};

export default Player;

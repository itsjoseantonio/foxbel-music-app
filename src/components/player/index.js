import { useState, useEffect, useRef } from 'react';

// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../../styles/components/player/Index.module.scss';

const Player = ({ item }) => {
    let { title, album, artist, preview } = item;
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
        if (!isPlaying) {
            setIsPlaying(true);
        }
    }, [item]);

    const handlePlay = () => {
        console.log('Play/Pause');
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className={styles.player}>
            <audio ref={audioRef} src={preview}></audio>
            <div className={styles.details}>
                <div className={styles.details__image}>
                    <img src={album.cover_medium} alt={title} />
                </div>
                <div className={styles.details__text}>
                    <p>{title}</p>
                    <span>
                        {artist.name} - {album.title}
                    </span>
                </div>
            </div>
            <div className={styles.controls}>
                <button>
                    <FontAwesomeIcon icon={faStepBackward} />
                </button>
                <button className={styles.controls__play} onClick={handlePlay}>
                    {isPlaying ? (
                        <FontAwesomeIcon icon={faPause} />
                    ) : (
                        <FontAwesomeIcon icon={faPlay} />
                    )}
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

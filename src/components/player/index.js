import { useState, useEffect, useRef } from 'react';

// Components //
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faPause,
    faStepBackward,
    faStepForward,
    faVolumeOff,
    faVolumeMute,
    faVolumeDown,
    faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../../styles/components/player/Index.module.scss';

const Player = ({ item }) => {
    const { title, album, artist, preview } = item;
    const [isPlaying, setIsPlaying] = useState(true);
    const [volumeValue, setVolumeValue] = useState(50);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
        if (!isPlaying) {
            setIsPlaying(true);
        }
    }, [item]);

    const handlePlay = () => {
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVolume = (event, newValue) => {
        setVolumeValue(newValue);
        audioRef.current.volume = volumeValue / 100;
        console.log(audioRef.current.volume);
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
            <div className={styles.volumeWrap}>
                <div className={styles.volumeWrap__control}>
                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{ mb: 0 }}
                        alignItems="center"
                    >
                        <Slider
                            className={styles.volumeWrap__meter}
                            aria-label="Volume"
                            value={volumeValue}
                            onChange={handleVolume}
                            sx={{
                                color: '#fff',
                                '& .MuiSlider-thumb': {
                                    boxShadow: 'none !important',
                                },
                                '& .MuiSlider-root': {
                                    height: '6px',
                                },
                            }}
                        />
                    </Stack>
                </div>
                <div className={styles.volumeWrap__icon}>
                    {audioRef.current.volume < 0.1 && (
                        <FontAwesomeIcon icon={faVolumeMute} />
                    )}
                    {audioRef.current.volume < 0.6 &&
                        audioRef.current.volume > 0.1 && (
                            <FontAwesomeIcon icon={faVolumeDown} />
                        )}
                    {audioRef.current.volume > 0.6 && (
                        <FontAwesomeIcon icon={faVolumeUp} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Player;

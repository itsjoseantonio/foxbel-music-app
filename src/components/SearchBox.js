// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../styles/components/SearchBox.module.scss';

function SearchBox({ word, setWord }) {
    const handleWord = (value) => {
        setWord(value);
    };

    return (
        <div className={styles.searchBox}>
            <input
                value={word}
                name=""
                placeholder="Buscar por canciones o álbum"
                onChange={(e) => handleWord(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} />
        </div>
    );
}

export default SearchBox;

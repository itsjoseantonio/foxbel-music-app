// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../styles/components/SearchBox.module.scss';

function SearchBox() {
    return (
        <div className={styles.searchBox}>
            <input value="" name="" placeholder="Buscar" />
            <FontAwesomeIcon icon={faSearch} />
        </div>
    );
}

export default SearchBox;

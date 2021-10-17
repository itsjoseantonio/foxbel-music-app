// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../styles/components/User.module.scss';

const User = () => {
    return (
        <div className={styles.user}>
            <FontAwesomeIcon icon={faSearch} />
            <span>Francisco M.</span>
        </div>
    );
};

export default User;

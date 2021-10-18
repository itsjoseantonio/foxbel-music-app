// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../styles/components/User.module.scss';

const User = ({ name }) => {
    return (
        <div className={styles.user}>
            <FontAwesomeIcon icon={faUser} />
            <span>{name}</span>
        </div>
    );
};

export default User;

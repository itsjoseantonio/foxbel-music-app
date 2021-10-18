// Styles //
import styles from '../styles/components/Button.module.scss';

function Button({ altClass, text, onClick }) {
    return (
        <button
            className={`${styles.button}  ${altClass ? styles[altClass] : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;

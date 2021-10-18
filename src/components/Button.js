// Styles //
import styles from '../styles/components/Button.module.scss';

function Button({ altClass, text }) {
    return (
        <button
            className={`${styles.button}  ${altClass ? styles[altClass] : ''}`}
        >
            {text}
        </button>
    );
}

export default Button;

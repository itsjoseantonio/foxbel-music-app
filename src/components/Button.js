// Styles //
import styles from '../styles/components/SearchBox.module.scss';

function Button({ text }) {
    return <button className={styles.button}> {text}</button>;
}

export default Button;

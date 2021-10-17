import logo from '../assets/images/foxbel-music.png';

// Styles //
import styles from '../styles/components/Logo.module.scss';

const Logo = () => {
    return (
        <a href="/" className={styles.logo}>
            <img src={logo} alt="" />
        </a>
    );
};

export default Logo;

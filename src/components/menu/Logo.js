import logo from '../../assets/images/foxbel-music.png';

// Styles //
import styles from '../../styles/components/menu/Logo.module.scss';

const Logo = () => {
    return (
        <a href="/" className={styles.logo}>
            <img src={logo} alt="Foxbel Music" />
        </a>
    );
};

export default Logo;

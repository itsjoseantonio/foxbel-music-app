// Styles //
import styles from '../../styles/components/layouts/Menu.module.scss';

const Menu = ({ children }) => {
    return <nav className={styles.menu}>{children}</nav>;
};

export default Menu;

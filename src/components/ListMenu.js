// Styles //
import styles from '../styles/components/ListMenu.module.scss';

const ListMenu = ({ title, items }) => {
    return (
        <div className={styles.listMenu}>
            <h2>Mi librería</h2>
            <ul>
                {items.map((ele) => (
                    <li>{ele}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListMenu;

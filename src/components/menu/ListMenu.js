// Styles //
import styles from '../../styles/components/menu/ListMenu.module.scss';

const ListMenu = ({ title, items }) => {
    return (
        <div className={styles.listMenu}>
            <h2>{title}</h2>
            <ul>
                {items.map((ele, i) => (
                    <li key={i}>{ele}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListMenu;

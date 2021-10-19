import { useState } from 'react';

// Styles //
import styles from '../../styles/components/menu/ListMenu.module.scss';

const ListMenu = ({ title, items }) => {
    const [index, setIndex] = useState(0);
    const handleIndex = (index) => {
        setIndex(index);
    };

    return (
        <div className={styles.listMenu}>
            <h2>{title}</h2>
            <ul>
                {items.map((ele, i) => (
                    <li
                        key={i}
                        onClick={() => handleIndex(i)}
                        className={index === i ? styles.active : ''}
                    >
                        {ele}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListMenu;

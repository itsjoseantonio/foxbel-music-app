// Styles //
import styles from '../../styles/components/layouts/Collections.module.scss';

const Collections = ({ title, children }) => {
    return (
        <section className={styles.collections}>
            <h3>{title}</h3>
            <div className={styles.collections__grid}>{children}</div>
        </section>
    );
};

export default Collections;

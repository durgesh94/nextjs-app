import styles from './card.module.css';

export default function Card({ title, content, path }) {
    return (
        <>
            <a
                href={path}
                className={styles.card}
                rel="noopener noreferrer"
            >
                <h2>
                    {title} <span>-&gt;</span>
                </h2>
                <p>{content}</p>
            </a>
        </>
    )
}
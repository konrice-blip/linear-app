import Link from 'next/link';
import styles from './Card.module.css';
import { cardIntegrate } from '../../data/integration';

export default function Card() {
  return (
    <div className={styles.deckWrapper}>
      {cardIntegrate.map((item) => (
        <Link href={`/${item.slug}`} className={styles.cardLink} key={item.slug}>
          <div className={styles.deckCard}>
            <article className={styles.integrationCard}>
              <div className={styles.cardHeader}>
                <img src={item.icon} alt={`${item.title} logo`} className={styles.cardIcon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <div className={styles.cardBody}>
                <p className={styles.cardDescription}>{item.shortDescription}</p>
                <span className={styles.cardArrow}> &gt; </span>
              </div>
            </article>
          </div>
        </Link>
      ))}
    </div>
  );
}
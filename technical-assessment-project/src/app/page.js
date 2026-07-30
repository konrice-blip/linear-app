import Card from '@/components/Card/Card';
import BuildInt from '@/components/BuildInt/BuildInt';
import styles from './Homepage.module.css'; 

export default function HomePage() {
  return (
    <main className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <p className={styles.breadcrumb}><a href="#">Integrations</a> / Essentials</p>
        <h1>Key integrations to enhance <br/> your Linear experience</h1>
      </section>

      <div>
        <Card />
        <BuildInt />
      </div>
    </main>
  );
}
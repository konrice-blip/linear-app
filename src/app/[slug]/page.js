import { cardIntegrate } from "@/data/integration";
import Link from "next/link";
import styles from "./Figma.module.css";

export default async function DetailPage({ params }) {
  const { slug } = await params;
  const item = cardIntegrate.find((card) => card.slug === slug);

  if (!item) {
    return (
      <main className={styles.container}>
        <h1>Integration Not Found</h1>
        <Link href="/">← Back to Integrations</Link>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      {/* Main Heading */}
      <nav className={styles.breadcrumb}>
        <Link href="/">Integrations</Link> / <span>{item.title}</span>
        <h1 className={styles.shortDesc}>{item.shortDescription}</h1>
      </nav>

      {/* Photo Preview + Tagline */}
      <div className={styles.gridContainer}>
        <div className={styles.contentCol}>
          <header className={styles.header}>
            <div className={styles.photoScrollWrapper}>
              {(item.photos && item.photos.length ? item.photos : [item.photoPreview]).map((photo, idx) => (
                <img
                  key={idx}
                  src={photo}
                  alt={`${item.title} preview ${idx + 1}`}
                  className={styles.photoPreview}
                />
              ))}
            </div>

            <div className={styles.taglineRow}>
              {item.tagline && <p className={styles.tagline}>{item.tagline}</p>}
              <div className={styles.photoNav}>
                <button className={styles.navArrowLeft}>&lt;</button>
                <button className={styles.navArrowRight}>&gt;</button>
              </div>
            </div>
          </header>
          
          {/* Article Description */}
          <article className={styles.article}>
            {item.overview && (
              <section className={styles.sectionBlock}>
                <h2>Overview</h2>
                <p>{item.overview}</p>
              </section>
            )}

            {item.sections?.map((sec) => (
              <section key={sec.id} className={styles.sectionBlock}>
                <h2>{sec.title}</h2>
                {sec.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                {sec.configure && (
                  <div className={styles.configureBlock}>
                    <h2>Configure</h2>
                    <p>{sec.configure}</p>
                  </div>
                )}
              </section>
            ))}
          </article>
        </div>

        {/* Sidebar */}
        {item.sidebar && (
          <aside className={styles.sidebarCol}>
            <div className={styles.sidebarItem}>
              <div className={styles.sidebarBrandRow}>
                <img src={item.smallIcon} alt={`${item.title} icon`} className={styles.figmaLogo} />
                <div className={styles.sidebarBrandText}>
                  <span className={styles.sidebarLabel}>Figma</span>
                  <p className={styles.sidebarValue}>
                    By {item.sidebar.by}
                    <svg className={styles.verifiedIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 1.5l2.163 1.246 2.5.086 1.086 2.25 2.25 1.086.086 2.5L19.33 10l-1.246 2.163-.086 2.5-2.25 1.086-1.086 2.25-2.5.086L10 19.33l-2.163-1.246-2.5-.086-1.086-2.25-2.25-1.086-.086-2.5L.67 10l1.246-2.163.086-2.5 2.25-1.086L5.337 1.5l2.5.086L10 1.5zm-.943 11.057l4.5-5.5-1.114-.914-3.5 4.278-1.443-1.443-1 1 2.557 2.579z" clipRule="evenodd" />
                    </svg>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.sidebarItem}>
              <span className={styles.sidebarLabel}>Website</span>
              <a href={`https://${item.sidebar.website}`} target="_blank" rel="noreferrer" className={styles.sidebarLink}>
                {item.sidebar.website}
              </a>
            </div>

            <div className={`${styles.sidebarItem} ${styles.categoryItem}`}>
              <span className={styles.sidebarLabel}>Category</span>
              <a href={`https://${item.sidebar.website}`} target="_blank" rel="noreferrer" className={styles.sidebarLink}>
                {item.sidebar.categories.join(", ")}
              </a>
            </div>

            <div className={`${styles.sidebarItem} ${styles.docsItem}`}>
              <span className={styles.sidebarLabel}>Docs</span>
              <a href={item.sidebar.docsLink} target="_blank" rel="noreferrer" className={styles.sidebarLink}>
                {item.sidebar.docsLabel}
              </a>
            </div>

            <div className={styles.sidebarItem}>
              <span className={styles.sidebarLabel}>Contact</span>
              <a href={`mailto:${item.sidebar.contactEmail}`} className={styles.sidebarLink}>
                Email Linear
              </a>
            </div>

            <button type="button" className={styles.addToLinearBtn}>
              Add to Linear
            </button>
          </aside>
        )}
      </div>
    </main>
  );
}
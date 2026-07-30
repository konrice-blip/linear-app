const product = ["Intake", "Plan", "Build", "Diffs", "Monitor", "Pricing", "Security"];
const features = ["Asks", "Agents", "Coding Sessions", "Customer Requests", "Insights", "Mobile", "Integrations", "Changelog"];
const company = ["About","Customers","Careers","Blog","Method","Quality","Brand"];
const resources = ["Switch", "Download", "Documentation", "Developers", "Status", "Enterprise", "Startups"];
const connect = ["Contact us", "Community","X (Twitter)","GitHub","YouTube"];
const legal = ["Privacy", "Terms", "DPA", "AUP"]
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/linear-logo.png" alt="Linear Logo" className={styles.footerLogo}/>
      
      <div className={styles.footerSections}>
        <div className={styles.footer1}>
          <h3>Product</h3>
          <ul>
            {product.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer2}>
          <h3>Features</h3>
          <ul>
            {features.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer3}>
          <h3>Company</h3>
          <ul>
            {company.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer4}>
          <h3>Resources</h3>
          <ul>
            {resources.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer5}>
          <h3>Connect</h3>
          <ul>
            {connect.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer6}>
          <h3>Legal</h3>
          <ul>
            {legal.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
  </footer>
  );
}
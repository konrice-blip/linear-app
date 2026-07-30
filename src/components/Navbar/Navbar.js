import styles from './Navbar.module.css';
const navigation = ["Product", "Resources", "Customers","Pricing", "Now", "Contact"]

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>

          <img src="/linear-logo.png" alt="Linear Logo" className={styles.logoImg}/>
          <h1>Linear</h1>
      </div>
      <div className={styles.navbarLinks}>
        <ul>
          {navigation.map((nav, index) => <li key={index}><a href="#">{nav}</a></li>)}
        </ul>
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.authentication}>
          <p>
            <span>|</span>
            <a href="#">Log in</a>  
            <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </nav>
  );
}
import styles from './page.module.css'
import NavBar from './components/navbar.js';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>PersonalCloud</h1>
      </div>
      <NavBar/>
    </main>
  )
}

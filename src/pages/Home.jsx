import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>Built with Claude</span>
        <h1 className={styles.heading}>Design. Build. Ship.</h1>
        <p className={styles.description}>
          A hands-on playground for the Net Ninja Claude course. Explore a live
          design system and see how components come together to form real page
          layouts.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => navigate('/blog')}>
            View Blog
          </button>
          <button className={styles.btnOutline} onClick={() => navigate('/components')}>
            Components
          </button>
        </div>
      </div>
      <div className={styles.blob} aria-hidden="true" />
    </main>
  )
}

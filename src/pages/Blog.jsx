import { useNavigate } from 'react-router-dom'
import styles from './Blog.module.css'

const posts = [
  {
    id: 1,
    tag: 'Tutorial',
    tagColor: 'primary',
    title: 'Getting Started with Claude API',
    excerpt:
      'Learn how to connect your React app to the Claude API and start building AI-powered features in minutes.',
    author: 'Net Ninja',
    date: 'Mar 10, 2026',
    readTime: '5 min read',
  },
  {
    id: 2,
    tag: 'Design',
    tagColor: 'secondary',
    title: 'Building a Design System from Scratch',
    excerpt:
      'A step-by-step walkthrough of creating scalable CSS custom properties for color, typography, and spacing.',
    author: 'Net Ninja',
    date: 'Mar 12, 2026',
    readTime: '7 min read',
  },
  {
    id: 3,
    tag: 'React',
    tagColor: 'success',
    title: 'CSS Modules vs Tailwind: Which Should You Use?',
    excerpt:
      'We compare scoped CSS Modules with utility-first Tailwind classes across real-world project scenarios.',
    author: 'Net Ninja',
    date: 'Mar 14, 2026',
    readTime: '6 min read',
  },
]

const tagClass = {
  primary:   styles.tagPrimary,
  secondary: styles.tagSecondary,
  success:   styles.tagSuccess,
}

export default function Blog() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button className={styles.back} onClick={() => navigate('/')}>← Back</button>
        <h1 className={styles.pageTitle}>Blog</h1>
        <p className={styles.pageDesc}>
          Articles about React, design systems, and building with Claude.
        </p>
      </header>

      <div className={styles.grid}>
        {posts.map(post => (
          <article key={post.id} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={`${styles.tag} ${tagClass[post.tagColor]}`}>{post.tag}</span>
            </div>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardExcerpt}>{post.excerpt}</p>
            <div className={styles.cardFooter}>
              <div className={styles.author}>
                <div className={styles.avatar}>{post.author[0]}</div>
                <span>{post.author}</span>
              </div>
              <div className={styles.meta}>
                <span>{post.date}</span>
                <span className={styles.dot}>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'
import styles from './Components.module.css'

const colors = [
  { name: 'Primary',   var: '--color-primary',    hex: '#6c63ff' },
  { name: 'Secondary', var: '--color-secondary',  hex: '#ff6584' },
  { name: 'Success',   var: '--color-success',    hex: '#43d787' },
  { name: 'Warning',   var: '--color-warning',    hex: '#ffca28' },
  { name: 'Danger',    var: '--color-danger',     hex: '#ff5252' },
  { name: 'Neutral 100', var: '--color-neutral-100', hex: '#f3f4f6' },
  { name: 'Neutral 400', var: '--color-neutral-400', hex: '#9ca3af' },
  { name: 'Neutral 900', var: '--color-neutral-900', hex: '#111827' },
]

const typeScale = [
  { label: 'Display / 4xl', size: 'var(--text-4xl)', weight: 'var(--fw-bold)',    sample: 'The quick brown fox' },
  { label: 'Heading / 3xl', size: 'var(--text-3xl)', weight: 'var(--fw-bold)',    sample: 'The quick brown fox' },
  { label: 'Title / 2xl',   size: 'var(--text-2xl)', weight: 'var(--fw-semibold)', sample: 'The quick brown fox' },
  { label: 'Subtitle / xl', size: 'var(--text-xl)',  weight: 'var(--fw-medium)',  sample: 'The quick brown fox' },
  { label: 'Body / base',   size: 'var(--text-base)', weight: 'var(--fw-regular)', sample: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Small / sm',    size: 'var(--text-sm)',  weight: 'var(--fw-regular)', sample: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Caption / xs',  size: 'var(--text-xs)',  weight: 'var(--fw-regular)', sample: 'The quick brown fox jumps over the lazy dog.' },
]

export default function Components() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button className={styles.back} onClick={() => navigate('/')}>← Back</button>
        <h1 className={styles.pageTitle}>Design System</h1>
        <p className={styles.pageDesc}>Typography, colors, and core tokens used across the project.</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Color Palette</h2>
        <div className={styles.colorGrid}>
          {colors.map(c => (
            <div key={c.name} className={styles.colorCard}>
              <div className={styles.swatch} style={{ background: c.hex }} />
              <span className={styles.colorName}>{c.name}</span>
              <code className={styles.colorHex}>{c.hex}</code>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Type Scale</h2>
        <div className={styles.typeList}>
          {typeScale.map(t => (
            <div key={t.label} className={styles.typeRow}>
              <span className={styles.typeLabel}>{t.label}</span>
              <span
                className={styles.typeSample}
                style={{ fontSize: t.size, fontWeight: t.weight }}
              >
                {t.sample}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Buttons</h2>
        <div className={styles.buttonRow}>
          <button className={styles.btnPrimary}>Primary</button>
          <button className={styles.btnSecondary}>Secondary</button>
          <button className={styles.btnOutline}>Outline</button>
          <button className={styles.btnGhost}>Ghost</button>
          <button className={styles.btnDanger}>Danger</button>
        </div>
      </section>
    </div>
  )
}

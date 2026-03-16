const colors = [
  { name: 'Primary',     hex: '#6c63ff' },
  { name: 'Secondary',   hex: '#ff6584' },
  { name: 'Success',     hex: '#43d787' },
  { name: 'Warning',     hex: '#ffca28' },
  { name: 'Danger',      hex: '#ff5252' },
  { name: 'Neutral 100', hex: '#f3f4f6' },
  { name: 'Neutral 400', hex: '#9ca3af' },
  { name: 'Neutral 900', hex: '#111827' },
]

const typeScale = [
  { label: 'Display / 4xl', size: '2.25rem',  weight: '700', sample: 'The quick brown fox' },
  { label: 'Heading / 3xl', size: '1.875rem', weight: '700', sample: 'The quick brown fox' },
  { label: 'Title / 2xl',   size: '1.5rem',   weight: '600', sample: 'The quick brown fox' },
  { label: 'Subtitle / xl', size: '1.25rem',  weight: '500', sample: 'The quick brown fox' },
  { label: 'Body / base',   size: '1rem',     weight: '400', sample: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Small / sm',    size: '0.875rem', weight: '400', sample: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Caption / xs',  size: '0.75rem',  weight: '400', sample: 'The quick brown fox jumps over the lazy dog.' },
]

const btnBase = 'px-6 py-2 rounded-lg text-base font-semibold cursor-pointer transition border-2 hover:opacity-85 hover:-translate-y-px'

export default function Components() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-8 min-h-screen">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Design System</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">Typography, colors, and core tokens used across the project.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-neutral-200 dark:border-neutral-700">Color Palette</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4">
          {colors.map(c => (
            <div key={c.name} className="flex flex-col gap-2">
              <div className="h-20 rounded-lg border border-black/[0.06]" style={{ background: c.hex }} />
              <span className="text-sm font-medium">{c.name}</span>
              <code className="font-mono text-xs text-neutral-400">{c.hex}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-neutral-200 dark:border-neutral-700">Type Scale</h2>
        <div className="flex flex-col gap-6">
          {typeScale.map(t => (
            <div key={t.label} className="flex items-baseline gap-6">
              <span className="text-xs text-neutral-400 font-mono min-w-[130px] shrink-0">{t.label}</span>
              <span className="leading-[1.3]" style={{ fontSize: t.size, fontWeight: t.weight }}>
                {t.sample}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-neutral-200 dark:border-neutral-700">Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <button className={`${btnBase} bg-primary text-white border-primary`}>Primary</button>
          <button className={`${btnBase} bg-secondary text-white border-secondary`}>Secondary</button>
          <button className={`${btnBase} bg-transparent text-primary border-primary`}>Outline</button>
          <button className={`${btnBase} bg-transparent text-neutral-600 dark:text-neutral-400 border-transparent`}>Ghost</button>
          <button className={`${btnBase} bg-danger text-white border-danger`}>Danger</button>
        </div>
      </section>
    </div>
  )
}

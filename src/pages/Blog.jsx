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

const tagClasses = {
  primary:   'bg-[rgba(108,99,255,0.12)] text-primary',
  secondary: 'bg-[rgba(255,101,132,0.12)] text-secondary',
  success:   'bg-[rgba(67,215,135,0.15)] text-[#1d8a4e]',
}

export default function Blog() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-8 min-h-screen">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Articles about React, design systems, and building with Claude.
        </p>
      </header>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
        {posts.map(post => (
          <article
            key={post.id}
            className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 flex flex-col gap-4 transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
          >
            <div className="flex">
              <span className={`text-xs font-semibold px-[10px] py-[2px] rounded-full uppercase tracking-[0.06em] ${tagClasses[post.tagColor]}`}>
                {post.tag}
              </span>
            </div>
            <h2 className="text-xl font-semibold leading-[1.35]">{post.title}</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-[1.65] flex-1">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-neutral-400 pt-4 border-t border-neutral-100 dark:border-neutral-700">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 font-medium">
                <div className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {post.author[0]}
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>{post.date}</span>
                <span className="text-neutral-200">·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

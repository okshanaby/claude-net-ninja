import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-[600px] text-center relative z-10">
        <span className="inline-block bg-neutral-100 dark:bg-neutral-800 text-primary text-sm font-semibold px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 mb-4 tracking-widest uppercase">
          Built with Claude
        </span>
        <h1 className="text-4xl font-bold leading-[1.15] mb-4">
          Design. Build. Ship.
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-[1.7]">
          A hands-on playground for the Net Ninja Claude course. Explore a live
          design system and see how components come together to form real page
          layouts.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className="px-8 py-3 bg-primary text-white rounded-lg text-base font-semibold cursor-pointer transition hover:opacity-[0.88] hover:-translate-y-px"
            onClick={() => navigate('/blog')}
          >
            View Blog
          </button>
          <button
            className="px-8 py-3 bg-transparent text-primary border-2 border-primary rounded-lg text-base font-semibold cursor-pointer transition hover:bg-primary hover:text-white hover:-translate-y-px"
            onClick={() => navigate('/components')}
          >
            Components
          </button>
        </div>
      </div>
      <div
        className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(108,99,255,0.12)_0%,transparent_70%)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />
    </main>
  )
}

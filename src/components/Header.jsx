import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/',           label: 'Home' },
  { to: '/blog',       label: 'Blog' },
  { to: '/components', label: 'Components' },
  { to: '/about',      label: 'About' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-700">
      <nav className="h-14 flex items-center gap-6 max-w-[900px] mx-auto px-6">
        <span className="font-semibold text-primary">Claude Course</span>
        <div className="ml-auto flex items-center gap-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? 'text-primary'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

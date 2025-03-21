import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { LiveTime } from './live-time'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
    disabled: true
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-2 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <div key={path}>
                  {navItems[path].disabled ? (
                    <span className="transition-all text-neutral-400 dark:text-neutral-500 flex align-middle relative py-1 px-2 m-1 cursor-not-allowed">
                      {name}
                    </span>
                  ) : (
                    <Link
                      href={path}
                      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                    >
                      {name}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
          <div className="flex items-center space-x-4">
            <LiveTime />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}

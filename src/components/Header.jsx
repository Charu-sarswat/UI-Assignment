const navLinks = ["Platform", "Workflows", "Docs", "Pricing", "Contact"]

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-gradient-to-r from-white via-slate-50 to-sky-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-slate-900 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white">
            1
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">
              DevFlow
            </p>
            <p className="text-xs text-slate-500">Developer Platform</p>
          </div>
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="border-b-2 border-transparent pb-1 transition hover:border-blue-500 hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:text-slate-900 sm:flex"
            aria-label="Support"
          >
            🎧
          </button>
          <button className="hidden items-center gap-1 rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-white sm:flex">
            <span role="img" aria-label="flag">
              🇮🇳
            </span>
            <svg
              className="h-4 w-4 text-slate-500"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="hidden rounded-full border border-blue-500 bg-blue-50 px-5 py-1.5 text-sm font-semibold text-blue-600 transition hover:bg-white sm:inline-flex">
            Login
          </button>
          <button className="rounded-full bg-blue-600 px-5 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-500">
            Sign Up →
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header


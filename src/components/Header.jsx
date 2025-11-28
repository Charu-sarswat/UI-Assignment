import { useState, useEffect } from "react";

const navLinks = ["Platform", "Workflows", "Docs", "Pricing", "Contact"]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-gradient-to-r from-white via-slate-50 to-sky-50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-slate-900 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white text-xs sm:text-sm">
              1
            </div>
            <div>
              <p className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                DevFlow
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500">Developer Platform</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 lg:flex">
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
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:text-slate-900 lg:flex"
              aria-label="Support"
            >
              🎧
            </button>
            <button className="hidden items-center gap-1 rounded-full border border-slate-300 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 transition hover:bg-white lg:flex">
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
            <button className="hidden rounded-full border border-blue-500 bg-blue-50 px-3 sm:px-5 py-1.5 text-xs sm:text-sm font-semibold text-blue-600 transition hover:bg-white lg:inline-flex">
              Login
            </button>
            <button className="rounded-full bg-blue-600 px-3 sm:px-5 py-1.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-blue-500">
              <span className="hidden sm:inline">Sign Up →</span>
              <span className="sm:hidden">Sign Up</span>
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-2 p-2 text-slate-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white text-sm">
                1
              </div>
              <div>
                <p className="text-base font-semibold tracking-tight text-slate-900">
                  DevFlow
                </p>
                <p className="text-[10px] text-slate-500">Developer Platform</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-600 transition hover:text-slate-900"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Content */}
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                aria-label="Support"
              >
                <span className="text-lg">🎧</span>
                <span>Support</span>
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                <span role="img" aria-label="flag" className="text-lg">
                  🇮🇳
                </span>
                <span>Language</span>
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
              <button className="w-full rounded-full border border-blue-500 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-white">
                Login
              </button>
              <button className="w-full rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500">
                Sign Up →
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header


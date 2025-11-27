const companyLinks = ["About", "Careers", "Blog", "Press"]
const platformLinks = ["Workflow Studio", "Insights", "Docs", "API Reference"]
const supportLinks = ["Status", "Community", "Security", "Contact"]

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-sm text-slate-500">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 pb-10 sm:grid-cols-4">
          <div>
            <p className="text-xl font-semibold text-slate-900">DevFlow</p>
            <p className="mt-3 text-slate-600">
              Lightweight tools for developer productivity, automation, and
              customer demos.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-900"
              >
                Twitter
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-900"
              >
                GitHub
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-blue-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Platform
            </p>
            <ul className="mt-4 space-y-2">
              {platformLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-blue-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Support
            </p>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-blue-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 text-center text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} DevFlow. Built for demo purposes.</p>
          <div className="flex justify-center gap-6 sm:justify-end">
            <a href="#" className="transition hover:text-blue-600">
              Privacy
            </a>
            <a href="#" className="transition hover:text-blue-600">
              Terms
            </a>
            <a href="#" className="transition hover:text-blue-600">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


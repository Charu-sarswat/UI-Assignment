function CodeEditor({ title, language, snippet }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50 px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-900">
            {language}
          </span>
          <button className="text-xs text-slate-500 transition hover:text-emerald-500">
            change language &gt;
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Copy snippet"
            className="rounded p-1.5 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
          <div className="h-2 w-2 rounded-full bg-orange-400"></div>
          <button
            aria-label="Expand snippet"
            className="rounded p-1.5 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="rounded-b-2xl bg-slate-900 px-6 py-5 font-mono text-sm">
        <pre className="overflow-x-auto">
          <code className="text-slate-100">
            {snippet.map((line, index) => (
              <div key={index} className="flex gap-6">
                <span className="w-6 shrink-0 text-right text-xs text-slate-500">
                  {index + 1}
                </span>
                <span className="flex-1">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default CodeEditor;

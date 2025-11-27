import features from "../data/features.json"

function FeatureSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 space-y-4 text-center text-slate-900">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-600">
            Features
          </p>
          <h2 className="text-3xl font-semibold">
            Tools that feel simple, even when they are powerful
          </h2>
          <p className="text-slate-600">
            Each panel is designed to be readable for juniors and flexible for
            seniors. No complex setup scripts.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 text-slate-900 shadow-xl transition hover:-translate-y-1 hover:border-teal-200"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
              <div className="mt-4 grid gap-3">
                {feature.images.map((img, index) => (
                  <div
                    key={`${feature.id}-${index}`}
                    className="overflow-hidden rounded-xl border border-slate-100 bg-white"
                  >
                    <img src={img} alt="" className="h-32 w-full object-cover" />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection


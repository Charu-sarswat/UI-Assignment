import features from "../data/features.json";

function FeatureSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4 text-center text-slate-900">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Tools that feel simple, even when they are powerful
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Each panel is designed to be readable for juniors and flexible for
            seniors. No complex setup scripts.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 sm:p-6 text-slate-900 shadow-xl transition hover:-translate-y-1 hover:border-teal-200"
            >
              <h3 className="text-lg sm:text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                {feature.description}
              </p>
              <div className="mt-3 sm:mt-4 grid gap-2 sm:gap-3">
                {feature.images.map((img, index) => (
                  <div
                    key={`${feature.id}-${index}`}
                    className="overflow-hidden rounded-xl border border-slate-100 bg-white"
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-32 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;

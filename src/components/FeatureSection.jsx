import { useState } from "react";
import features from "../data/features.json";

function FeatureSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4 text-center text-slate-900">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-semibold">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Tools that feel simple, even when they are powerful
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Each panel is designed to be readable for juniors and flexible for
            seniors. No complex setup scripts.
          </p>
        </div>
        <div className="space-y-12 sm:space-y-16">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <article className="w-full rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Main Title */}
      <h3 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-slate-900">
        {feature.title}
      </h3>

      {/* Grid of 4 Sub-Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {feature.items.map((item) => (
          <SubFeatureCard key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
}

function SubFeatureCard({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="group relative rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
      onClick={handleClick}
    >
      {/* Image Container - Full Height Initially */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        {/* Loading State */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-teal-500"></div>
          </div>
        )}

        {/* Error State */}
        {imageError && (
          <div className="flex h-full items-center justify-center bg-slate-100 text-slate-400">
            <svg
              className="h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className={`h-full w-full object-cover transition-all duration-300 ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-110`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>

      {/* Text Content - Slides up from bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white p-4 sm:p-5 border-t border-slate-100 shadow-lg transform transition-all duration-500 ease-in-out ${
          isActive ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
        }`}
      >
        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
          {item.title}
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default FeatureSection;

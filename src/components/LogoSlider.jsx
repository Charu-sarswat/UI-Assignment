const logos = [
  "StackPoint",
  "CodeLight",
  "Northwind Labs",
  "Launchpad",
  "SkyForge",
  "Metricly",
  "CloudDrift",
  "DevNest"
]

function LogoSlider() {
  const marqueeItems = [...logos, ...logos]

  return (
    <section className="bg-white py-12">
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-slate-400">
          {marqueeItems.map((logo, index) => (
            <p
              key={`${logo}-${index}`}
              className="mx-8 text-sm uppercase tracking-[0.3em]"
            >
              {logo}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoSlider


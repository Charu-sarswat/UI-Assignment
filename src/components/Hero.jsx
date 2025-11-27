import { useEffect, useState, useRef } from "react";
import heroCards from "../data/heroCards.json";

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(true);
  const intervalRef = useRef(null);
  const currentSetRef = useRef(0); // Track which set we're currently in (0-19)

  // Duplicate cards 20 times for infinite scrolling feel (5 cards * 20 sets = 100 cards)
  const allCards = [
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
    ...heroCards,
  ];

  const scrollToIndex = (index, isForward = true, prevIndex = null) => {
    if (!scrollRef.current) return;

    // Get the actual width of the container (92% of screen)
    const containerWidth =
      scrollRef.current.parentElement?.offsetWidth || window.innerWidth * 0.92;
    const cardWidth = containerWidth; // Card is 100% of container width
    const currentPrevIndex = prevIndex !== null ? prevIndex : activeIndex;

    // Ensure transition is always enabled for consistent animations
    scrollRef.current.style.transition = "transform 700ms ease-in-out";

    // If wrapping from last card to first card (moving to next set)
    if (isForward && currentPrevIndex === heroCards.length - 1 && index === 0) {
      currentSetRef.current += 1;

      // If we've gone through all 20 sets, reset to the beginning seamlessly
      if (currentSetRef.current >= 20) {
        // First, scroll to the duplicate first card (which looks identical)
        const scrollPosition =
          currentSetRef.current * heroCards.length * cardWidth;
        scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;

        // After transition completes, reset to actual first card position
        setTimeout(() => {
          currentSetRef.current = 0;
          scrollRef.current.style.transition = "none";
          scrollRef.current.style.transform = `translateX(0px)`;
          setTimeout(() => {
            scrollRef.current.style.transition = "transform 700ms ease-in-out";
          }, 50);
        }, 700);
      } else {
        // Continue to next set - scroll forward to the first card of the next set
        // This makes card 6 (set 1, index 0) appear after card 5 (set 0, index 4)
        // Use the same calculation as normal scrolling for consistency
        const scrollPosition =
          (currentSetRef.current * heroCards.length + index) * cardWidth;
        scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      }
    }
    // If wrapping from first card to last card (moving to previous set)
    else if (
      !isForward &&
      currentPrevIndex === 0 &&
      index === heroCards.length - 1
    ) {
      currentSetRef.current -= 1;
      if (currentSetRef.current < 0) {
        currentSetRef.current = 19; // Go to last set (20th set, index 19)
      }
      const scrollPosition =
        (currentSetRef.current * heroCards.length + index) * cardWidth;
      scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
    // Normal scrolling within the same set
    else {
      const scrollPosition =
        (currentSetRef.current * heroCards.length + index) * cardWidth;
      scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        if (autoScrollRef.current) {
          setActiveIndex((prev) => {
            const next = (prev + 1) % heroCards.length;
            scrollToIndex(next, true, prev);
            return next;
          });
        }
      }, 4000);
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Initialize scroll position
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transition = "none";
      scrollRef.current.style.transform = `translateX(0px)`;
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.style.transition = "transform 700ms ease-in-out";
        }
      }, 50);
    }
  }, []);

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  const handlePrev = () => {
    autoScrollRef.current = false;
    const newIndex = (activeIndex - 1 + heroCards.length) % heroCards.length;
    scrollToIndex(newIndex, false, activeIndex);
    setActiveIndex(newIndex);
    setTimeout(() => {
      autoScrollRef.current = true;
    }, 6000);
  };

  const handleNext = () => {
    autoScrollRef.current = false;
    const newIndex = (activeIndex + 1) % heroCards.length;
    scrollToIndex(newIndex, true, activeIndex);
    setActiveIndex(newIndex);
    setTimeout(() => {
      autoScrollRef.current = true;
    }, 6000);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white">
      <div className="relative w-full max-w-[92%] mx-auto">
        <div className="relative overflow-hidden">
          {/* Arrow Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-1 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition hover:bg-white hover:scale-110"
            aria-label="Previous card"
          >
            <svg
              className="h-4 w-4 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition hover:bg-white hover:scale-110"
            aria-label="Next card"
          >
            <svg
              className="h-4 w-4 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Container - shows only one card, centered */}
          <div className="overflow-hidden w-full">
            <div
              ref={scrollRef}
              className="flex transition-transform duration-700 ease-in-out will-change-transform"
            >
              {allCards.map((card, index) => {
                const cardIndex = index % heroCards.length;
                const currentCard = heroCards[cardIndex];
                return (
                  <article
                    key={`${currentCard.id}-${index}`}
                    className="relative flex h-[85vh] w-full shrink-0 items-center gap-12 rounded-3xl p-12"
                  >
                    {/* Left Side - Text Content */}
                    <div className="flex-1 space-y-6">
                      <div className="space-y-3">
                        <h1 className="text-4xl font-bold text-blue-600 lg:text-5xl">
                          {currentCard.headline}
                        </h1>
                        <p className="text-xl text-slate-700">
                          {currentCard.subheadline}
                        </p>
                      </div>
                      <p className="text-sm text-slate-600">
                        {currentCard.features}
                      </p>
                      <div className="flex items-center gap-4">
                        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                          Sign Up Now →
                        </button>
                        <button className="font-semibold text-blue-600 transition hover:text-blue-700">
                          Know More
                        </button>
                      </div>
                    </div>

                    {/* Right Side - Person Image & Device */}
                    <div className="relative flex-shrink-0">
                      {/* Large Geometric Shape Background */}
                      <div
                        className="absolute -right-16 -top-16 h-[500px] w-[500px] rotate-12 bg-blue-600 opacity-15"
                        style={{
                          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                      />
                      <div className="relative z-10">
                        {/* Person Image */}
                        <div className="relative">
                          <img
                            src={currentCard.personPhoto}
                            alt={currentCard.personName}
                            className="h-80 w-64 rounded-2xl object-cover shadow-2xl"
                          />
                          {/* Badge on person */}
                          <div className="absolute -left-4 top-4 rounded-lg bg-yellow-400 px-3 py-2 text-xs font-bold text-slate-900 shadow-lg">
                            <div>{currentCard.companyName}</div>
                            <div className="text-[10px]">
                              {currentCard.personName}
                            </div>
                          </div>
                        </div>

                        {/* Device/Visual Element - positioned over geometric shape */}
                        <div className="absolute -bottom-6 -right-6 z-20 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 p-4 shadow-xl">
                          <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
                            DevFlow
                          </div>
                          <div className="text-[10px] text-slate-600">
                            {currentCard.poweredBy}
                          </div>
                        </div>

                        {/* Person Title - positioned below image */}
                        <div className="absolute -bottom-16 left-0 z-10 whitespace-nowrap">
                          <p className="text-xs font-semibold text-slate-800 drop-shadow-sm">
                            {currentCard.personTitle}
                          </p>
                          <p className="text-4xl font-bold italic text-slate-900 drop-shadow-sm">
                            {currentCard.personName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-8 mb-4 w-full">
          <div className="flex flex-col gap-4 rounded-2xl bg-white px-4 py-4 shadow-lg sm:flex-row sm:items-center sm:px-6">
            {/* Search Input */}
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5">
              <svg
                className="h-5 w-5 shrink-0 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Start your search"
                className="flex-1 bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none"
              />
              <button className="shrink-0 text-slate-400 hover:text-slate-600">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700 sm:px-4 sm:py-2.5 sm:text-sm">
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span className="whitespace-nowrap">Accept Payments</span>
              </button>

              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700 sm:px-4 sm:py-2.5 sm:text-sm">
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="whitespace-nowrap">Make Payouts</span>
              </button>

              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700 sm:px-4 sm:py-2.5 sm:text-sm">
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <span className="whitespace-nowrap">Start Development</span>
              </button>

              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700 sm:px-4 sm:py-2.5 sm:text-sm">
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="whitespace-nowrap">Get Started</span>
              </button>

              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700 sm:px-4 sm:py-2.5 sm:text-sm">
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <span className="whitespace-nowrap">Something else?</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

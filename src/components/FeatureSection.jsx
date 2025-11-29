import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import features from "../data/features.json";

gsap.registerPlugin(ScrollTrigger);

const colorThemes = {
  1: { bg: "from-green-50 to-green-100", accent: "text-green-600", border: "border-green-200" },
  2: { bg: "from-purple-50 to-purple-100", accent: "text-purple-600", border: "border-purple-200" },
  3: { bg: "from-blue-50 to-blue-100", accent: "text-blue-600", border: "border-blue-200" },
};

function FeatureSection() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP ScrollTrigger Animation (Desktop Only)
  useEffect(() => {
    if (isMobile || !cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.querySelectorAll(".feature-card");

    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Create timeline for card animations
    // Adjusted scroll distance: faster first transition, keep second transition perfect
    // Timeline positions: 0.6 (card 1->2), 2.1 (card 2->3) = total ~2.1 units
    // Use actual container height (70-75vh) for scroll distance
    const container = cardsContainerRef.current?.querySelector('.relative');
    const cardHeight = container?.offsetHeight || window.innerHeight * 0.75; // Fallback to 75vh
    const scrollDistance = cardHeight * 2.1;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollDistance}`, // Adjusted distance for faster first transitions
        scrub: 1.2, // Smooth scrubbing
        pin: true,
        anticipatePin: 1,
        pinSpacing: true, // Controlled pin spacing
        onUpdate: (self) => {
          const progress = self.progress;
          // Timeline positions: 0.6 (card 1->2), 2.1 (card 2->3)
          // Convert progress (0-1) to timeline position (0-2.1)
          const timelinePos = progress * 2.1;
          
          let newIndex;
          if (timelinePos < 0.6) {
            // Before first transition = Card 1
            newIndex = 0;
          } else if (timelinePos < 2.1) {
            // Between first and second transition = Card 2
            newIndex = 1;
          } else {
            // After second transition = Card 3
            newIndex = 2;
          }
          setActiveSection(newIndex);
        },
      },
    });

    // Set initial states for all cards
    cards.forEach((card, index) => {
      if (index === 0) {
        // First card starts visible at center (bigger scale)
        gsap.set(card, { y: 0, opacity: 1, scale: 1.0 });
      } else {
        // Other cards start off-screen below (smaller scale when they become active)
        gsap.set(card, { y: 800, opacity: 0, scale: 0.95 });
      }
    });

    // Animate cards with STACKING effect - Adjusted timing for faster first transitions
    cards.forEach((card, index) => {
      if (index > 0) {
        // Adjust timing: first transition faster, keep second transition timing perfect
        let timelinePosition;
        if (index === 1) {
          // First card to second card - faster (0.6 instead of 1.5)
          timelinePosition = 0.6;
        } else if (index === 2) {
          // Second card to third card - keep perfect timing (1.5 spacing from previous)
          timelinePosition = 0.6 + 1.5; // = 2.1
        } else {
          // For any additional cards, use standard spacing
          timelinePosition = index * 1.5;
        }

        // Slide the new card up from bottom to center position (smaller when active)
        tl.to(
          card,
          {
            y: 0,
            opacity: 1,
            scale: 0.95, // Active card is smaller (0.95)
            duration: 1,
            ease: "power2.inOut",
          },
          timelinePosition
        );

        // Move ALL previous cards UP and SCALE THEM UP (make them BIGGER)
        // All stacked cards should be bigger (1.0) than active card (0.95)
        for (let i = 0; i < index; i++) {
          const stackY = -(index - i) * 60; // 60px offset per level
          // All stacked cards are at scale 1.0 (bigger than active card at 0.95)
          const stackScale = 1.0; // All stacked cards are bigger
          const stackOpacity = Math.max(0.7, 1 - (index - i) * 0.1);
          
          tl.to(
            cards[i],
            {
              y: stackY,
              scale: stackScale, // Scale UP - stacked cards are bigger
              opacity: stackOpacity,
              duration: 1,
              ease: "power2.inOut",
            },
            timelinePosition // Same timing as new card
          );
        }

        // When a newer card comes, scale UP this card (make it bigger)
        // This happens at the same time as the next card becomes active
        if (index < cards.length - 1) {
          let nextTimelinePosition;
          if (index === 1) {
            // Card 2 becomes active at 0.6, so card 1 scales up then
            nextTimelinePosition = 0.6;
          } else if (index === 2) {
            // Card 3 becomes active at 2.1, so card 2 scales up then
            nextTimelinePosition = 2.1;
          } else {
            nextTimelinePosition = (index + 1) * 1.5;
          }
          
          tl.to(
            card,
            {
              scale: 1.0, // This card scales UP (becomes bigger) when next card becomes active
              duration: 1,
              ease: "power2.inOut",
            },
            nextTimelinePosition // When next card starts animating
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  const currentTheme = colorThemes[features[activeSection]?.id] || colorThemes[1];

  // Mobile: Simple stacked layout
  if (isMobile) {
  return (
      <section className="bg-gradient-to-b from-white to-slate-50 py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

  // Desktop: Scroll-jacked sticky animation
  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-slate-50 w-full pt-5"
      style={{ height: 'auto' }}
    >
      {/* Cards Container with Scroll Animation */}
      <div ref={cardsContainerRef} className="relative pt-10">
        <div className="sticky top-[60px] mx-auto max-w-[1400px] px-6 py-8">
          <div className="relative h-[50vh] md:h-[75vh]">
            {features.map((feature, index) => (
              <article
                key={feature.id}
                className="feature-card absolute top-12 left-0 w-full h-full bg-white rounded-2xl px-8 pt-8 pb-10 border border-slate-200 flex flex-col"
                style={{ 
                  zIndex: index,
                  transformOrigin: 'top center',
                  boxShadow: index === activeSection 
                    ? '0 10px 40px rgba(0, 0, 0, 0.1)' 
                    : '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'box-shadow 0.3s ease',
                  willChange: 'transform, opacity'
                }}
              >
                {/* Main Title */}
                <h2 className="mb-8 text-4xl lg:text-5xl font-bold text-slate-900">
                  {feature.title}
                </h2>

                {/* Grid of 4 Sub-Cards in Single Row (4 columns like Razorpay) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 min-h-0">
                  {feature.items.map((item) => (
                    <SubFeatureCard key={item.id} item={item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature Card Component (used in mobile view)
function FeatureCard({ feature }) {
  return (
    <article className="w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm">
      <h3 className="mb-4 sm:mb-6 md:mb-8 text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
        {feature.title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {feature.items.map((item) => (
          <SubFeatureCard key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
}

// Sub Feature Card with image full card and text on hover/click
function SubFeatureCard({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="group relative rounded-lg sm:rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer h-64 sm:h-full"
      onClick={handleClick}
    >
      {/* Image Container - Full card coverage */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-teal-500"></div>
          </div>
        )}

        {imageError && (
          <div className="flex h-full items-center justify-center bg-slate-100 text-slate-400">
            <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        <img
          src={item.image}
          alt={item.title}
          className={`h-full w-full object-cover transition-all duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } ${!isActive ? "group-hover:scale-110" : ""}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>

      {/* Text Content - Appears on hover/click */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white p-3 sm:p-4 md:p-5 transform transition-all duration-500 ease-in-out border-t border-slate-200 ${
          isActive ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
        }`}
      >
        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 sm:mb-2">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default FeatureSection;

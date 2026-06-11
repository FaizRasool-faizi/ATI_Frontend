"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { timelineData, journeyStats } from "./TimelineData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AtiJourneyTimeline.module.css";

// Register GSAP plugins (client-side only)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ──────────────────────────────────────────────
   Animated CountUp hook
   ────────────────────────────────────────────── */
function useCountUp(end: number, duration = 2, trigger = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let raf: number;
    let start = 0;
    const increment = end / (duration * 60);
    const step = () => {
      start += increment;
      if (start >= end) {
        setValue(end);
        return;
      }
      setValue(Math.floor(start));
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, trigger]);

  return value;
}

/* ──────────────────────────────────────────────
   Stat Counter Component
   ────────────────────────────────────────────── */
function StatCounter({
  label,
  value,
  suffix,
  visible,
}: {
  label: string;
  value: number;
  suffix: string;
  visible: boolean;
}) {
  const count = useCountUp(value, 2.5, visible);
  return (
    <div className={styles.statItem}>
      <div className={styles.statValue}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Era overlay class mapper
   ────────────────────────────────────────────── */
function getOverlayClass(era: string): string {
  switch (era) {
    case "vintage":
      return styles.bgOverlayVintage;
    case "corporate":
      return styles.bgOverlayCorporate;
    case "modern":
      return styles.bgOverlayModern;
    case "futuristic":
      return styles.bgOverlayFuturistic;
    default:
      return styles.bgOverlayVintage;
  }
}

/* ──────────────────────────────────────────────
   Main Component
   ────────────────────────────────────────────── */
const AtiJourneyTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const currentEntry = timelineData[activeIndex];
  const totalSlides = timelineData.length;

  // Animate card content on index change
  const animateCard = useCallback(
    (direction: "up" | "down" = "up") => {
      if (!cardRef.current) return;
      setIsAnimating(true);

      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false),
      });

      // Exit
      tl.to(cardRef.current, {
        opacity: 0,
        y: direction === "up" ? -30 : 30,
        filter: "blur(6px)",
        duration: 0.3,
        ease: "power2.in",
      });

      // Enter
      tl.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: direction === "up" ? 30 : -30,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out",
        }
      );
    },
    []
  );

  // Navigate to a specific index
  const goToIndex = useCallback(
    (idx: number) => {
      if (idx === activeIndex || isAnimating || idx < 0 || idx >= totalSlides)
        return;
      const direction = idx > activeIndex ? "up" : "down";
      setActiveIndex(idx);
      animateCard(direction);
    },
    [activeIndex, isAnimating, totalSlides, animateCard]
  );

  const goNext = useCallback(
    () => goToIndex(activeIndex + 1),
    [activeIndex, goToIndex]
  );
  const goPrev = useCallback(
    () => goToIndex(activeIndex - 1),
    [activeIndex, goToIndex]
  );

  // Initial entrance animation
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Stats observer
  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  // Vertical progress height
  const progressPercent =
    totalSlides > 1 ? (activeIndex / (totalSlides - 1)) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      className={styles.journeySection}
      id="our-journey"
      aria-label="ATI Journey Timeline"
    >
      {/* Background Image */}
      <Image
        src="/Logo/journey_bg.png"
        alt=""
        fill
        className={styles.bgImage}
        priority
        aria-hidden="true"
      />

      {/* Background Overlay — changes with era */}
      <div
        className={`${styles.bgOverlay} ${getOverlayClass(currentEntry.era)}`}
        aria-hidden="true"
      />

      {/* Floating Achievement Tags */}
      <div className={styles.floatingTags} aria-hidden="true">
        <span className={styles.floatTag}>National Recognition</span>
        <span className={styles.floatTag}>Educational Impact</span>
        <span className={styles.floatTag}>Community Development</span>
        <span className={styles.floatTag}>Social Welfare</span>
      </div>

      {/* Content */}
      <div className={styles.contentWrapper}>
        {/* Title */}
        <h2 className={styles.sectionTitle}>Our Journey</h2>

        {/* 3-Column Grid */}
        <div className={styles.mainGrid}>
          {/* LEFT: Vertical Dot Navigation */}
          <nav className={styles.verticalNav} aria-label="Timeline navigation">
            <div className={styles.verticalLine} />
            <div
              className={styles.verticalProgress}
              style={{ height: `${progressPercent}%` }}
            />
            {timelineData.map((entry, i) => (
              <button
                key={entry.year}
                className={`${styles.dotBtn} ${
                  i === activeIndex ? styles.dotBtnActive : ""
                }`}
                onClick={() => goToIndex(i)}
                aria-label={`Go to ${entry.year}`}
                aria-current={i === activeIndex ? "step" : undefined}
                title={entry.year}
              />
            ))}
          </nav>

          {/* CENTER: Glassmorphism Content Card */}
          <div className={styles.cardPanel}>
            <div ref={cardRef} className={styles.glassCard}>
              <div className={styles.cardYear}>{currentEntry.year}</div>
              <div className={styles.cardTitle}>{currentEntry.title}</div>
              <p className={styles.cardDesc}>{currentEntry.description}</p>
              <ul className={styles.achievementsList}>
                {currentEntry.achievements.map((ach, idx) => (
                  <li key={idx} className={styles.achievementItem}>
                    <span className={styles.achievementBullet} />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Visual / Logo Panel */}
          <div className={styles.visualPanel}>
            <div className={styles.logoContainer}>
              <div className={styles.logoGlow} />
              <Image
                src="/Logo/logo.png"
                alt="ATI Logo"
                width={220}
                height={220}
                className={styles.logoImage}
              />
            </div>
          </div>
        </div>

        {/* BOTTOM: Navigation Strip */}
        <nav className={styles.bottomNav} aria-label="Timeline decade navigation">
          {/* Slide Counter */}
          <div className={styles.slideCounter}>
            <span className={styles.slideCounterCurrent}>
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className={styles.slideCounterTotal}>
              {String(totalSlides).padStart(2, "0")}
            </span>
          </div>

          {/* Left Arrow */}
          <button
            className={styles.navArrow}
            onClick={goPrev}
            disabled={activeIndex === 0}
            aria-label="Previous decade"
          >
            ‹
          </button>

          {/* Decade Labels */}
          <div className={styles.decadeStrip}>
            {timelineData.map((entry, i) => (
              <React.Fragment key={entry.year}>
                {i > 0 && <span className={styles.decadeSep}>•••</span>}
                <button
                  className={`${styles.decadeBtn} ${
                    i === activeIndex ? styles.decadeBtnActive : ""
                  }`}
                  onClick={() => goToIndex(i)}
                  aria-label={`Navigate to ${entry.year}`}
                >
                  {entry.year}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className={styles.navArrow}
            onClick={goNext}
            disabled={activeIndex === totalSlides - 1}
            aria-label="Next decade"
          >
            ›
          </button>
        </nav>

        {/* STATS BAR */}
        <div ref={statsRef} className={styles.statsBar}>
          {journeyStats.map((stat) => (
            <StatCounter
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              visible={statsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtiJourneyTimeline;

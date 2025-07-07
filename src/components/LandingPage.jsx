import React, { useEffect, useRef } from "react";
import styles from "./LandingPage.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  {
    svg: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" stroke="#00FFF0" strokeWidth="2" fill="rgba(0,255,240,0.08)" />
        <path d="M24 28c4 0 8 2 8 4v2H16v-2c0-2 4-4 8-4z" stroke="#00FFF0" strokeWidth="2"/>
        <circle cx="24" cy="20" r="4" stroke="#00FFF0" strokeWidth="2"/>
      </svg>
    ),
    title: "Decentralized Identity",
    desc: "Own your professional identity across platforms, not just on one site.",
  },
  {
    svg: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="8" width="32" height="32" rx="8" stroke="#A259FF" strokeWidth="2" fill="rgba(162,89,255,0.08)" />
        <path d="M16 24h16M24 16v16" stroke="#A259FF" strokeWidth="2"/>
      </svg>
    ),
    title: "Verifiable Credentials",
    desc: "Showcase your work history and skills with cryptographic proof.",
  },
  {
    svg: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <polygon points="24,8 40,40 8,40" stroke="#FF61F6" strokeWidth="2" fill="rgba(255,97,246,0.08)" />
        <circle cx="24" cy="28" r="4" stroke="#FF61F6" strokeWidth="2"/>
      </svg>
    ),
    title: "Trust & Privacy",
    desc: "Control your data and reputation. Share only what you want.",
  },
];

export default function LandingPage() {
  const headlineRef = useRef();
  const cardsRef = useRef([]);
  const ctaRef = useRef();
  const heroArtRef = useRef();

  useEffect(() => {
    // Headline text reveal
    gsap.from(headlineRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Cards scroll-in
    cardsRef.current.forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "power2.out",
      });
    });

    // CTA hover effect
    if (ctaRef.current) {
      ctaRef.current.addEventListener("mousemove", (e) => {
        const rect = ctaRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctaRef.current.style.setProperty("--x", `${x}px`);
        ctaRef.current.style.setProperty("--y", `${y}px`);
      });
    }

    // HeroArt parallax effect
    const handleMouseMove = (e) => {
      if (!heroArtRef.current) return;
      const rect = heroArtRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(heroArtRef.current, {
        x: x * 0.05,
        y: y * 0.05,
        duration: 0.5,
        ease: "power2.out",
      });
    };
    const heroSection = document.querySelector(`.${styles.hero}`);
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (heroSection) {
        heroSection.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className={styles.bg}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 ref={headlineRef} className={styles.headline}>
            Decentralized Identity for Gig Workers
          </h1>
          <p className={styles.subtext}>
            Gig workers and freelancers often struggle with fragmented work histories and lack of verifiable credentials, making it difficult to build professional trust without relying on centralized platforms.
          </p>
          <button
            ref={ctaRef}
            className={styles.cta}
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          >
            Join the Movement
          </button>
        </div>
        <div className={styles.heroArt} ref={heroArtRef}>
          {/* Animated SVG or illustration */}
          <svg width="320" height="180" viewBox="0 0 320 180" fill="none">
            <circle cx="160" cy="90" r="80" fill="rgba(0,255,240,0.08)" />
            <circle cx="160" cy="90" r="60" stroke="#A259FF" strokeWidth="2" />
            <circle cx="160" cy="90" r="40" stroke="#FF61F6" strokeWidth="2" />
            {/* Add more animated SVG elements if desired */}
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>Why Decentralized Identity?</h2>
        <div className={styles.cards}>
          {icons.map((icon, i) => (
            <div
              className={styles.card}
              key={icon.title}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className={styles.icon}>{icon.svg}</div>
              <h3>{icon.title}</h3>
              <p>{icon.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

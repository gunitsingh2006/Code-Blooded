import React, { useState, useRef, useEffect } from "react";
import styles from "./Slider.module.css";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

const sliderData = [
  {
    id: 0,
    title: "What is Blockchain/Web3?",
    subtitle:
      "A paradigm shift in digital trust, transparency, and user empowerment.",
    theme: "web3",
    illustrationId: "web3-ill",
    icons: [
      <svg key="btc" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#00fff0" opacity="0.12"/><text x="18" y="23" textAnchor="middle" fontSize="18" fill="#00fff0" fontWeight="bold">₿</text></svg>,
      <svg key="nft" width="36" height="36" viewBox="0 0 36 36"><rect x="4" y="4" width="28" height="28" rx="8" fill="#A259FF" opacity="0.12"/><text x="18" y="23" textAnchor="middle" fontSize="14" fill="#A259FF" fontWeight="bold">NFT</text></svg>,
      <svg key="eth" width="36" height="36" viewBox="0 0 36 36"><polygon points="18,6 30,18 18,30 6,18" fill="#FF61F6" opacity="0.12"/><circle cx="18" cy="18" r="7" fill="#FF61F6" opacity="0.5"/></svg>
    ],
    illustration: (
      <svg id="web3-ill" width="220" height="120" viewBox="0 0 220 120" fill="none">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00fff0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0f2027" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle id="web3-main" cx="110" cy="60" r="55" fill="url(#g1)" />
        <circle id="web3-orbit" cx="110" cy="60" r="40" stroke="#A259FF" strokeWidth="3" fill="none" />
        <circle id="web3-orbit2" cx="110" cy="60" r="25" stroke="#FF61F6" strokeWidth="2" fill="none" />
        <g>
          <circle id="web3-dot1" cx="40" cy="30" r="8" fill="#00fff0" opacity="0.7" />
          <circle id="web3-dot2" cx="180" cy="30" r="8" fill="#A259FF" opacity="0.7" />
          <circle id="web3-dot3" cx="40" cy="90" r="8" fill="#FF61F6" opacity="0.7" />
          <circle id="web3-dot4" cx="180" cy="90" r="8" fill="#00fff0" opacity="0.7" />
        </g>
      </svg>
    ),
  },
  {
    id: 1,
    title: "Decentralized Identity for Gig Workers",
    subtitle:
      "Own your reputation. Secure your credentials. Work anywhere, trusted everywhere.",
    theme: "identity",
    illustrationId: "identity-ill",
    icons: [
      <svg key="id" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#00fff0" opacity="0.12"/><path d="M18 24c4 0 8 2 8 4v2H10v-2c0-2 4-4 8-4z" stroke="#00fff0" strokeWidth="2"/><circle cx="18" cy="16" r="4" stroke="#00fff0" strokeWidth="2"/></svg>,
      <svg key="shield" width="36" height="36" viewBox="0 0 36 36"><polygon points="18,6 30,18 18,30 6,18" fill="#A259FF" opacity="0.12"/><path d="M18 10l8 8-8 8-8-8z" stroke="#A259FF" strokeWidth="2"/></svg>,
      <svg key="star" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#FF61F6" opacity="0.12"/><polygon points="18,8 22,28 10,16 26,16 14,28" fill="#FF61F6" opacity="0.5"/></svg>
    ],
    illustration: (
      <svg id="identity-ill" width="220" height="120" viewBox="0 0 220 120" fill="none">
        <ellipse id="identity-bg" cx="110" cy="60" rx="60" ry="40" fill="#00fff0" opacity="0.08" />
        <rect id="identity-rect" x="70" y="40" width="80" height="40" rx="20" fill="#A259FF" opacity="0.12" />
        <circle id="identity-center" cx="110" cy="60" r="18" fill="#fff" opacity="0.15" />
        <g>
          <circle id="identity-dot" cx="110" cy="60" r="12" fill="#00fff0" />
          <rect id="identity-dot2" x="104" y="54" width="12" height="12" rx="6" fill="#A259FF" />
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Our Solution: Trustless, Seamless, Yours",
    subtitle:
      "Decentralized profiles, verifiable credentials, and privacy-first control. Empower gig workers to own their reputation and data.",
    theme: "solution",
    illustrationId: "solution-ill",
    icons: [
      <svg key="profile" width="36" height="36" viewBox="0 0 36 36"><rect x="4" y="4" width="28" height="28" rx="8" fill="#26d0ce" opacity="0.12"/><path d="M18 24c4 0 8 2 8 4v2H10v-2c0-2 4-4 8-4z" stroke="#26d0ce" strokeWidth="2"/><circle cx="18" cy="16" r="4" stroke="#26d0ce" strokeWidth="2"/></svg>,
      <svg key="check" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#a259ff" opacity="0.12"/><polyline points="12,18 17,23 24,13" fill="none" stroke="#a259ff" strokeWidth="2"/></svg>,
      <svg key="lock" width="36" height="36" viewBox="0 0 36 36"><rect x="4" y="4" width="28" height="28" rx="8" fill="#FF61F6" opacity="0.12"/><rect x="12" y="18" width="12" height="8" rx="4" fill="#FF61F6" opacity="0.5"/></svg>
    ],
    illustration: (
      <svg id="solution-ill" width="220" height="120" viewBox="0 0 220 120" fill="none">
        <rect id="solution-bg" x="30" y="30" width="160" height="60" rx="30" fill="#26d0ce" opacity="0.13" />
        <circle id="solution-center" cx="110" cy="60" r="30" fill="#a259ff" opacity="0.18" />
        <g>
          <rect id="solution-dot" x="90" y="50" width="40" height="20" rx="10" fill="#fff" opacity="0.18" />
          <circle id="solution-dot2" cx="110" cy="60" r="10" fill="#00fff0" />
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Frontier Intelligence & Privacy Options",
    subtitle:
      "Smart, fast, and privacy-focused. Your data, your control. Tech that feels familiar and secure.",
    theme: "tech",
    illustrationId: "tech-ill",
    icons: [
      <svg key="ai" width="36" height="36" viewBox="0 0 36 36"><polygon points="18,6 30,18 18,30 6,18" fill="#ff61f6" opacity="0.12"/><circle cx="18" cy="18" r="7" fill="#ff61f6" opacity="0.5"/></svg>,
      <svg key="privacy" width="36" height="36" viewBox="0 0 36 36"><rect x="4" y="4" width="28" height="28" rx="8" fill="#00fff0" opacity="0.12"/><rect x="12" y="18" width="12" height="8" rx="4" fill="#00fff0" opacity="0.5"/></svg>,
      <svg key="soc2" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#A259FF" opacity="0.12"/><circle cx="18" cy="18" r="7" fill="#A259FF" opacity="0.5"/></svg>
    ],
    illustration: (
      <svg id="tech-ill" width="220" height="120" viewBox="0 0 220 120" fill="none">
        <polygon id="tech-bg" points="110,20 200,100 20,100" fill="#ff61f6" opacity="0.10" />
        <circle id="tech-center" cx="110" cy="70" r="20" fill="#fff" opacity="0.13" />
        <g>
          <circle id="tech-dot" cx="110" cy="70" r="12" fill="#ff61f6" />
          <circle id="tech-dot2" cx="110" cy="70" r="6" fill="#00fff0" />
        </g>
      </svg>
    ),
  },
];

export default function Slider() {
  const [page, setPage] = useState(0);
  const sectionRefs = useRef([]);
  const sliderBgRef = useRef();
  const illRefs = useRef([]);
  const iconRefs = useRef([]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") setPage((p) => (p + 1) % sliderData.length);
      if (e.key === "ArrowLeft") setPage((p) => (p - 1 + sliderData.length) % sliderData.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // GSAP transitions
  useEffect(() => {
    sliderData.forEach((_, idx) => {
      if (sectionRefs.current[idx]) {
        gsap.to(sectionRefs.current[idx], {
          opacity: page === idx ? 1 : 0,
          pointerEvents: page === idx ? "auto" : "none",
          duration: 0.8,
          ease: "power3.inOut",
        });
      }
    });
  }, [page]);

  // Animate SVG illustrations (morphing, pulse, orbit, etc.)
  useEffect(() => {
    // Animate main circle pulse
    if (illRefs.current[page]) {
      const svg = illRefs.current[page].querySelector('svg');
      if (svg) {
        gsap.fromTo(svg, { scale: 0.95 }, { scale: 1, duration: 1.2, yoyo: true, repeat: -1, transformOrigin: "50% 50%", ease: "sine.inOut" });
      }
    }
    // Animate icons
    iconRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(el, { y: 10, opacity: 0.7 }, { y: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: "power2.out" });
        el.onmouseenter = () => gsap.to(el, { scale: 1.2, duration: 0.3, ease: "power2.out" });
        el.onmouseleave = () => gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    });
  }, [page]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sliderBgRef.current) return;
      const rect = sliderBgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(sliderBgRef.current, {
        backgroundPosition: `${50 + x * 0.01}% ${50 + y * 0.01}%`,
        duration: 0.6,
        ease: "power2.out",
      });
    };
    const bg = sliderBgRef.current;
    if (bg) bg.addEventListener("mousemove", handleMouseMove);
    return () => { if (bg) bg.removeEventListener("mousemove", handleMouseMove); };
  }, []);

  // Touch/swipe navigation
  useEffect(() => {
    let startX = null;
    const handleTouchStart = (e) => { startX = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
      if (startX === null) return;
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 60) setPage((p) => (p - 1 + sliderData.length) % sliderData.length);
      if (startX - endX > 60) setPage((p) => (p + 1) % sliderData.length);
      startX = null;
    };
    const bg = sliderBgRef.current;
    if (bg) {
      bg.addEventListener("touchstart", handleTouchStart);
      bg.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      if (bg) {
        bg.removeEventListener("touchstart", handleTouchStart);
        bg.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  const nextPage = () => setPage((p) => (p + 1) % sliderData.length);
  const prevPage = () => setPage((p) => (p - 1 + sliderData.length) % sliderData.length);
  const goToPage = (idx) => setPage(idx);

  return (
    <div className={styles.sliderBg} ref={sliderBgRef}>
      {sliderData.map((slide, idx) => (
        <section
          key={slide.id}
          ref={(el) => (sectionRefs.current[idx] = el)}
          className={
            styles.sliderSection +
            " " +
            styles[slide.theme] +
            (page === idx ? " " + styles.active : "")
          }
          style={{ zIndex: page === idx ? 2 : 1 }}
        >
          <div
            className={styles.illustration}
            ref={(el) => (illRefs.current[idx] = el)}
          >
            {slide.illustration}
          </div>
          <div className={styles.content}>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div className={styles.iconRow}>
              {slide.icons.map((icon, i) => (
                <span
                  key={i}
                  className={styles.iconWrap}
                  ref={(el) => (iconRefs.current[i] = el)}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}
      <div className={styles.navArrows}>
        <button onClick={prevPage} aria-label="Previous section">&#8592;</button>
        <button onClick={nextPage} aria-label="Next section">&#8594;</button>
      </div>
      <div className={styles.dots}>
        {sliderData.map((_, idx) => (
          <button
            key={idx}
            className={page === idx ? styles.activeDot : ""}
            onClick={() => goToPage(idx)}
            aria-label={`Go to section ${idx + 1}`}
          />
        ))}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>© {new Date().getFullYear()} CodeBlooded. All rights reserved.</span>
          <div className={styles.socials}>
            <a href="#" aria-label="Twitter"><svg width="24" height="24" fill="none"><path d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6.99A4.11 4.11 0 0 0 11.1 8.1c0 .32.04.64.1.94A11.65 11.65 0 0 1 3.1 4.6a4.11 4.11 0 0 0 1.27 5.48A4.07 4.07 0 0 1 2.8 9.1v.05a4.11 4.11 0 0 0 3.3 4.03c-.2.05-.41.08-.62.08-.15 0-.3-.01-.45-.04a4.12 4.12 0 0 0 3.84 2.85A8.24 8.24 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 5.92Z" fill="#00fff0"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="24" height="24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#A259FF" strokeWidth="2"/><rect x="6" y="10" width="2" height="6" fill="#A259FF"/><rect x="10" y="10" width="2" height="6" fill="#A259FF"/><circle cx="7" cy="7" r="1" fill="#A259FF"/><rect x="14" y="10" width="2" height="6" fill="#A259FF"/></svg></a>
          </div>
          <button className={styles.ctaFooter}>Join the Movement</button>
        </div>
      </footer>
    </div>
  );
} 
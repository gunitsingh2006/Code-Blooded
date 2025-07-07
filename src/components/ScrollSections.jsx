import React, { useRef, useEffect } from "react";
import styles from "./ScrollSections.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "web3",
    subtitle: "The Next Internet Revolution",
    title: "What is Blockchain/Web3?",
    text: "Web3 is a new era of the internet built on decentralization, transparency, and user empowerment. It enables trustless transactions, digital ownership, and a future where you control your data and identity.",
    illustration: (
      <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00fff0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0f2027" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="110" cy="60" r="55" fill="url(#g1)" />
        <circle cx="110" cy="60" r="40" stroke="#A259FF" strokeWidth="3" fill="none" />
        <circle cx="110" cy="60" r="25" stroke="#FF61F6" strokeWidth="2" fill="none" />
        <g>
          <circle cx="40" cy="30" r="8" fill="#00fff0" opacity="0.7" />
          <circle cx="180" cy="30" r="8" fill="#A259FF" opacity="0.7" />
          <circle cx="40" cy="90" r="8" fill="#FF61F6" opacity="0.7" />
          <circle cx="180" cy="90" r="8" fill="#00fff0" opacity="0.7" />
        </g>
      </svg>
    ),
    icons: [
      <svg key="btc" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#00fff0" opacity="0.12"/><text x="18" y="23" textAnchor="middle" fontSize="18" fill="#00fff0" fontWeight="bold">₿</text></svg>,
      <svg key="nft" width="36" height="36" viewBox="0 0 36 36"><rect x="4" y="4" width="28" height="28" rx="8" fill="#A259FF" opacity="0.12"/><text x="18" y="23" textAnchor="middle" fontSize="14" fill="#A259FF" fontWeight="bold">NFT</text></svg>,
      <svg key="eth" width="36" height="36" viewBox="0 0 36 36"><polygon points="18,6 30,18 18,30 6,18" fill="#FF61F6" opacity="0.12"/><circle cx="18" cy="18" r="7" fill="#FF61F6" opacity="0.5"/></svg>
    ]
  },
  {
    id: "identity",
    subtitle: "Empowering the Gig Economy",
    title: "Decentralized Identity for Gig Workers",
    text: "Freelancers and gig workers often face fragmented reputations and lack of verifiable credentials. With decentralized identity, you own your professional story, build trust, and unlock new opportunities—without relying on a single platform.",
    illustration: (
      <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
        <ellipse cx="110" cy="60" rx="60" ry="40" fill="#00fff0" opacity="0.08" />
        <rect x="70" y="40" width="80" height="40" rx="20" fill="#A259FF" opacity="0.12" />
        <circle cx="110" cy="60" r="18" fill="#fff" opacity="0.15" />
        <g>
          <circle cx="110" cy="60" r="12" fill="#00fff0" />
          <rect x="104" y="54" width="12" height="12" rx="6" fill="#A259FF" />
        </g>
      </svg>
    ),
    icons: [
      <svg key="id" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#00fff0" opacity="0.12"/><path d="M18 24c4 0 8 2 8 4v2H10v-2c0-2 4-4 8-4z" stroke="#00fff0" strokeWidth="2"/><circle cx="18" cy="16" r="4" stroke="#00fff0" strokeWidth="2"/></svg>,
      <svg key="shield" width="36" height="36" viewBox="0 0 36 36"><polygon points="18,6 30,18 18,30 6,18" fill="#A259FF" opacity="0.12"/><path d="M18 10l8 8-8 8-8-8z" stroke="#A259FF" strokeWidth="2"/></svg>,
      <svg key="star" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#FF61F6" opacity="0.12"/><polygon points="18,8 22,28 10,16 26,16 14,28" fill="#FF61F6" opacity="0.5"/></svg>
    ]
  },
  {
    id: "solution",
    subtitle: "A Trustless, Seamless Solution",
    title: "Our Solution: Trustless, Seamless, Yours",
    text: "We provide decentralized profiles, verifiable credentials, and privacy-first control. Showcase your work, prove your skills, and control your data—all with cryptographic security and zero reliance on centralized gatekeepers.",
    illustration: (
      <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
        <rect x="30" y="30" width="160" height="60" rx="30" fill="#26d0ce" opacity="0.13" />
        <circle cx="110" cy="60" r="30" fill="#a259ff" opacity="0.18" />
        <g>
          <rect x="90" y="50" width="40" height="20" rx="10" fill="#fff" opacity="0.18" />
          <circle cx="110" cy="60" r="10" fill="#00fff0" />
        </g>
      </svg>
    ),
    icons: [
      <svg key="profile" width="36" height="36" viewBox="0 0 36 36"><rect x="4" y="4" width="28" height="28" rx="8" fill="#26d0ce" opacity="0.12"/><path d="M18 24c4 0 8 2 8 4v2H10v-2c0-2 4-4 8-4z" stroke="#26d0ce" strokeWidth="2"/><circle cx="18" cy="16" r="4" stroke="#26d0ce" strokeWidth="2"/></svg>,
      <svg key="check" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#a259ff" opacity="0.12"/><polyline points="12,18 17,23 24,13" fill="none" stroke="#a259ff" strokeWidth="2"/></svg>,
      <svg key="lock" width="36" height="36" viewBox="0 0 36 36"><rect x="4" y="4" width="28" height="28" rx="8" fill="#FF61F6" opacity="0.12"/><rect x="12" y="18" width="12" height="8" rx="4" fill="#FF61F6" opacity="0.5"/></svg>
    ]
  },
  {
    id: "tech",
    subtitle: "Frontier Intelligence & Privacy",
    title: "Frontier Intelligence & Privacy Options",
    text: "Our platform is powered by smart, fast, and privacy-focused technology. Your data is never stored without your consent. Enjoy a familiar, beautiful experience with next-gen security and control.",
    illustration: (
      <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
        <polygon points="110,20 200,100 20,100" fill="#ff61f6" opacity="0.10" />
        <circle cx="110" cy="70" r="20" fill="#fff" opacity="0.13" />
        <g>
          <circle cx="110" cy="70" r="12" fill="#ff61f6" />
          <circle cx="110" cy="70" r="6" fill="#00fff0" />
        </g>
      </svg>
    ),
    icons: [
      <svg key="ai" width="36" height="36" viewBox="0 0 36 36"><polygon points="18,6 30,18 18,30 6,18" fill="#ff61f6" opacity="0.12"/><circle cx="18" cy="18" r="7" fill="#ff61f6" opacity="0.5"/></svg>,
      <svg key="privacy" width="36" height="36" viewBox="0 0 36 36"><rect x="4" y="4" width="28" height="28" rx="8" fill="#00fff0" opacity="0.12"/><rect x="12" y="18" width="12" height="8" rx="4" fill="#00fff0" opacity="0.5"/></svg>,
      <svg key="soc2" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#A259FF" opacity="0.12"/><circle cx="18" cy="18" r="7" fill="#A259FF" opacity="0.5"/></svg>
    ]
  }
];

export default function ScrollSections() {
  const sectionRefs = useRef([]);
  const iconRefs = useRef([]);
  const subtitleRefs = useRef([]);
  const headlineRefs = useRef([]);
  const textRefs = useRef([]);
  const illRefs = useRef([]);
  const earthRef = useRef();
  // For per-letter animation
  const headlineLetterRefs = useRef([]);

  useEffect(() => {
    // Navbar fade in
    gsap.fromTo("#navbar", { opacity: 0 }, { opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out" });
    // About fade in
    gsap.fromTo("#about", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: 0.6, ease: "power3.out" });
    // Animate Earth rotation
    if (earthRef.current) {
      gsap.to(earthRef.current.querySelector('svg'), { rotate: 360, repeat: -1, duration: 18, ease: "linear", transformOrigin: "50% 50%" });
    }
    sectionRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.4,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
    // Animate subtitle, headline, text with scroll-scrub and 0.4s delay
    subtitleRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.4,
            scrollTrigger: {
              trigger: sectionRefs.current[i],
              start: "top 70%",
              end: "top 40%",
              scrub: true
            }
          }
        );
      }
    });
    headlineRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.4,
            scrollTrigger: {
              trigger: sectionRefs.current[i],
              start: "top 65%",
              end: "top 35%",
              scrub: true
            }
          }
        );
      }
    });
    textRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            delay: 0,
            scrollTrigger: {
              trigger: sectionRefs.current[i],
              start: "top 50%",
              end: "top 40%",
              scrub: true
            }
          }
        );
      }
    });
    // Animate icons with parallax, fade, and scale
    iconRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0, scale: 0.7 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: 1.7,
            stagger: 0.18,
            scrollTrigger: {
              trigger: sectionRefs.current[Math.floor(i/3)],
              start: "top 55%",
              end: "top 25%",
              scrub: true
            }
          }
        );
      }
    });
    // Parallax for illustrations
    illRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: -60,
            ease: "none",
            delay: 0.4,
            scrollTrigger: {
              trigger: sectionRefs.current[i],
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }
    });
    // Animate headline per-letter
    headlineLetterRefs.current.forEach((letterArr, idx) => {
      if (letterArr && sectionRefs.current[idx]) {
        gsap.fromTo(
          letterArr,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.12,
            ease: "power2.out",
            delay: 1.5,
            scrollTrigger: {
              trigger: sectionRefs.current[idx],
              start: "top 65%",
              end: "top 35%",
              scrub: true
            }
          }
        );
      }
    });
  }, []);

  // Mouse move tilt for Cube
  const initialTilt = { rotateX: -18, rotateY: 24 };
  const handleCubeMouseMove = (e) => {
    if (!earthRef.current) return;
    const rect = earthRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = initialTilt.rotateY + ((x - centerX) / centerX) * 18;
    const rotateX = initialTilt.rotateX - ((y - centerY) / centerY) * 18;
    gsap.to(earthRef.current, { rotateY, rotateX, duration: 0.5, ease: "power2.out" });
  };
  const handleCubeMouseLeave = () => {
    if (!earthRef.current) return;
    gsap.to(earthRef.current, { rotateY: initialTilt.rotateY, rotateX: initialTilt.rotateX, duration: 0.7, ease: "power2.out" });
  };

  // Helper to split headline into spans and refs
  const renderHeadline = (headline, idx) => {
    const letters = Array.from(headline);
    headlineLetterRefs.current[idx] = [];
    return (
      <h1 className={styles.headline}>
        {letters.map((char, i) => (
          <span
            key={i}
            ref={el => (headlineLetterRefs.current[idx][i] = el)}
            style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char}
          </span>
        ))}
      </h1>
    );
  };

  return (
    <div className={styles.scrollBg}>
      {/* Navbar */}
      <nav id="navbar" className={styles.navbar}>
        <div className={styles.navTitle}>Web3 Identity</div>
        <div className={styles.navLinks}>
          <a href="#web3">Web3</a>
          <a href="#identity">Identity</a>
          <a href="#solution">Solution</a>
          <a href="#tech">Tech</a>
        </div>
        <button className={styles.ctaNav}>Get Started</button>
      </nav>
      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <h1 className={styles.siteTitle}>Decentralized Identity for Gig Workers</h1>
        <p className={styles.siteAbout}>A new paradigm for trust, privacy, and reputation in the digital gig economy. Own your credentials, control your data, and unlock new opportunities—powered by Web3.</p>
      </section>
      {/* Main Sections */}
      {sections.map((section, idx) => (
        <>
          <section
            key={section.id}
            id={section.id}
            ref={el => (sectionRefs.current[idx] = el)}
            className={styles.scrollSection + " " + styles[section.id]}
          >
            {/* Earth on first section */}
            {idx === 0 && (
              <div className={styles.earthWrapper}
                onMouseMove={handleCubeMouseMove}
                onMouseLeave={handleCubeMouseLeave}
              >
                <div className={styles.earth3D} ref={earthRef}>
                  {/* 3D Animated Box */}
                  <div className={styles.cube3D}>
                    <div className={styles.cubeFace + ' ' + styles.cubeFront}></div>
                    <div className={styles.cubeFace + ' ' + styles.cubeBack}></div>
                    <div className={styles.cubeFace + ' ' + styles.cubeRight}></div>
                    <div className={styles.cubeFace + ' ' + styles.cubeLeft}></div>
                    <div className={styles.cubeFace + ' ' + styles.cubeTop}></div>
                    <div className={styles.cubeFace + ' ' + styles.cubeBottom}></div>
                    {/* Connections between faces (SVG overlay) */}
                    <svg className={styles.cubeConnections} width="220" height="220" viewBox="0 0 220 220" style={{position:'absolute',top:0,left:0,pointerEvents:'none'}}>
                      {/* Define face centers in 2D projection (approximate) */}
                      {(() => {
                        const centers = [
                          [110, 30],   // Front
                          [110, 190],  // Back
                          [190, 110],  // Right
                          [30, 110],   // Left
                          [110, 60],   // Top
                          [110, 160],  // Bottom
                        ];
                        let lines = [];
                        for (let i = 0; i < centers.length; i++) {
                          for (let j = i + 1; j < centers.length; j++) {
                            lines.push(
                              <line key={i+','+j} x1={centers[i][0]} y1={centers[i][1]} x2={centers[j][0]} y2={centers[j][1]} stroke="#00fff0" strokeWidth="2" opacity="0.45" />
                            );
                          }
                        }
                        return lines;
                      })()}
                    </svg>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.illustration} ref={el => (illRefs.current[idx] = el)}>{section.illustration}</div>
            <div className={styles.subtitle} ref={el => (subtitleRefs.current[idx] = el)}>{section.subtitle}</div>
            {renderHeadline(section.title, idx)}
            <p className={styles.sectionText} ref={el => (textRefs.current[idx] = el)}>{section.text}</p>
            <div className={styles.iconRow}>
              {section.icons.map((icon, i) => (
                <span
                  key={i}
                  className={styles.iconWrap}
                  ref={el => (iconRefs.current[idx * 3 + i] = el)}
                >
                  {icon}
                </span>
              ))}
            </div>
          </section>
          {idx < sections.length - 1 && <div className={styles.sectionDivider}></div>}
        </>
      ))}
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
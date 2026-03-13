'use client';

import { useEffect, useState } from 'react';
import { translations, Language } from './translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [activeChapter, setActiveChapter] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const chapterElements = t.chapters.map(ch => document.getElementById(ch.id)).filter(Boolean);
      for (let i = chapterElements.length - 1; i >= 0; i--) {
        const el = chapterElements[i];
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveChapter(t.chapters[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t.chapters]);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'sr' : 'en');
  };

  return (
    <main>
      {/* Progress bar at top */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Language toggle */}
      <button className="lang-toggle" onClick={toggleLanguage}>
        {lang === 'en' ? 'SR' : 'EN'}
      </button>

      {/* Bottom navigation */}
      <nav className="bottom-nav">
        <div className="chapter-dots">
          {t.chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              className={`chapter-dot ${activeChapter === chapter.id ? 'active' : ''}`}
              onClick={() => scrollToChapter(chapter.id)}
              title={chapter.title}
            >
              <span className="dot-number">{index + 1}</span>
              <span className="dot-title">{chapter.title}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-split">
        <div className="hero-image">
          <img src="/images/Screenshot 2026-03-13 at 13.45.04.png" alt="Neve" />
        </div>
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <p className="hero-description">{t.hero.description1}</p>
          <p className="hero-description">{t.hero.description2}</p>
          <div className="hero-cta">
            <a href="#intro" className="btn btn-primary">{t.hero.readStory}</a>
            <a href="/Nevena_Pancic_CV_SE.pdf" download className="btn">{t.hero.downloadCV}</a>
          </div>
          <div className="hero-companion">
            <img src="/images/dog zoran.png" alt="Zoran the rescue dog" />
            <span>{t.hero.companion}</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <div className="chapter-split reverse" id="intro">
        <div className="chapter-image">
          <img src="/images/just neve.png" alt="Neve" />
        </div>
        <div className="chapter-content">
          <h2>{t.intro.title}</h2>
          <p>{t.intro.p1}</p>
          <p>{t.intro.p2}</p>
        </div>
      </div>

      {/* MEET NEVE */}
      <div className="chapter-split" id="meet-neve">
        <div className="chapter-image">
          <img src="/images/Screenshot 2026-03-13 at 07.51.32.png" alt="Running 212km to EU Parliament" />
        </div>
        <div className="chapter-content">
          <h2>{t.meetNeve.title}</h2>
          <p>{t.meetNeve.p1}</p>
          <p>{t.meetNeve.p2}</p>
          <p>
            <a href="https://www.instagram.com/__neve_/reel/DPJ7XHVCExW/?hl=en" target="_blank" className="link">{t.meetNeve.links.speech1}</a> · <a href="https://www.instagram.com/blokadar/reel/DJkINodM9W_/?hl=en" target="_blank" className="link">{t.meetNeve.links.speech2}</a> · <a href="https://www.instagram.com/pohod_na_vetrenjace/reel/DJj-yAAsNZE/?hl=en" target="_blank" className="link">{t.meetNeve.links.speech3}</a>
          </p>
        </div>
      </div>

      {/* THE NERD */}
      <div className="chapter-split reverse" id="the-nerd">
        <div className="chapter-image">
          <img src="/images/Screenshot 2026-03-13 at 13.48.47.png" alt="UN Environment Assembly delegate" />
        </div>
        <div className="chapter-content">
          <h2>{t.theNerd.title}</h2>
          <p>{t.theNerd.p1}</p>
        </div>
      </div>

      {/* THE FARMERS */}
      <div className="chapter-split" id="the-farmers">
        <div className="chapter-image">
          <img src="/images/Screenshot 2026-03-13 at 13.48.21.png" alt="Model UN conference" />
        </div>
        <div className="chapter-content">
          <h2>{t.theFarmers.title}</h2>
          <p>{t.theFarmers.p1}</p>
        </div>
      </div>

      {/* THE MOTHER */}
      <div className="chapter-split reverse" id="the-mother">
        <div className="chapter-image">
          <img src="/images/neve with bffs.png" alt="With best friends" />
        </div>
        <div className="chapter-content">
          <h2>{t.theMother.title}</h2>
          <p>{t.theMother.p1}</p>
          <p className="quote">{t.theMother.quote}</p>
          <p>{t.theMother.p2}</p>
        </div>
      </div>

      {/* THE FATHER */}
      <div className="chapter-split" id="the-father">
        <div className="chapter-image">
          <img src="/images/running.png" alt="Running" />
        </div>
        <div className="chapter-content">
          <h2>{t.theFather.title}</h2>
          <p>{t.theFather.p1}</p>
        </div>
      </div>

      {/* THE CONTEXT */}
      <div className="chapter-split reverse" id="the-context">
        <div className="chapter-image">
          <img src="/images/Screenshot 2026-03-13 at 07.51.25.png" alt="At a protest for Serbia" />
        </div>
        <div className="chapter-content">
          <h2>{t.theContext.title}</h2>
          <p>{t.theContext.p1}</p>
        </div>
      </div>

      {/* THE RICE */}
      <div className="chapter-split" id="the-rice">
        <div className="chapter-image">
          <img src="/images/Screenshot 2026-03-13 at 13.45.54.png" alt="Neve in Amsterdam" />
        </div>
        <div className="chapter-content">
          <h2>{t.theRice.title}</h2>
          <p>{t.theRice.p1}</p>
        </div>
      </div>

      {/* SERBIA TRIES */}
      <div className="chapter-split reverse" id="serbia-tries">
        <div className="chapter-image">
          <img src="/images/neve schoolarship.png" alt="Dositeja scholarship" />
        </div>
        <div className="chapter-content">
          <h2>{t.serbiaTries.title}</h2>
          <p>{t.serbiaTries.p1}</p>
        </div>
      </div>

      {/* THE BOOTCAMP */}
      <div className="chapter-split" id="the-bootcamp">
        <div className="chapter-image">
          <img src="/images/Screenshot 2026-03-13 at 07.51.12.png" alt="Bootcamp project presentation" />
        </div>
        <div className="chapter-content">
          <h2>{t.theBootcamp.title}</h2>
          <p>{t.theBootcamp.p1}</p>
          <p>{t.theBootcamp.p2}</p>
        </div>
      </div>

      {/* STATS ROW */}
      <div className="stats-section">
        <div className="stats-row">
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">{t.stats.languages}</span>
          </div>
          <div className="stat">
            <span className="stat-number">3</span>
            <span className="stat-label">{t.stats.diplomas}</span>
          </div>
          <div className="stat">
            <span className="stat-number">212</span>
            <span className="stat-label">{t.stats.kmRun}</span>
          </div>
          <div className="stat">
            <span className="stat-number">10</span>
            <span className="stat-label">{t.stats.yearsRunning}</span>
          </div>
        </div>
      </div>

      {/* THE HEARTBREAK */}
      <div className="chapter-split reverse" id="the-heartbreak">
        <div className="chapter-image">
          <img src="/images/fun neve.png" alt="Neve" />
        </div>
        <div className="chapter-content">
          <h2>{t.theHeartbreak.title}</h2>
          <p>{t.theHeartbreak.p1}</p>
        </div>
      </div>

      {/* MIYAGAMI */}
      <div className="chapter-split" id="miyagami">
        <div className="chapter-image">
          <img src="/images/Screenshot 2026-03-13 at 13.45.04.png" alt="Neve at work" />
        </div>
        <div className="chapter-content">
          <h2>{t.miyagami.title}</h2>
          <p>{t.miyagami.p1}</p>
        </div>
      </div>

      {/* WHAT NOW */}
      <div className="chapter-split reverse" id="what-now">
        <div className="chapter-image">
          <img src="/images/Screenshot 2026-03-13 at 07.51.40.png" alt="Rome Half Marathon" />
        </div>
        <div className="chapter-content">
          <h2>{t.whatNow.title}</h2>
          <p>{t.whatNow.p1}</p>
        </div>
      </div>

      {/* MY PROMISE */}
      <div className="chapter-split" id="my-promise">
        <div className="chapter-image">
          <img src="/images/neve with uni diploma.png" alt="Masters graduation" />
        </div>
        <div className="chapter-content">
          <h2>{t.myPromise.title}</h2>
          <p>{t.myPromise.p1}</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="name">Neve</div>
        <img src="/images/dog zoran.png" alt="Zoran the rescue dog" className="footer-dog" />
        <p>{t.footer.thanks}</p>
        <p className="zoran-note">{t.footer.zoranNote}</p>
        <p>{t.footer.xoxo}</p>
        <div className="footer-buttons">
          <a href="/Nevena_Pancic_CV_SE.pdf" download className="btn">{t.footer.downloadCV}</a>
          <a href="https://www.linkedin.com/in/pancic/" target="_blank" className="btn">{t.footer.linkedin}</a>
        </div>
      </footer>
    </main>
  )
}

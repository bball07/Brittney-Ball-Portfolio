import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";

const SECTIONS = [
  { id: "summary", title: "Summary", moreHref: "/resume.pdf", moreLabel: "Resume" },
  { id: "blog", title: "Technical Blog", moreHref: "/blog", moreLabel: "More…" },
  { id: "speaking", title: "Speaking Engagements", moreHref: "/speaking", moreLabel: "More…" },
  { id: "publications", title: "Publications", moreHref: "/publications", moreLabel: "More…" },
  { id: "community", title: "Community Involvement", moreHref: "/community", moreLabel: "More…" },
  { id: "skills", title: "Core Competencies / Tech Skills", moreHref: "/skills", moreLabel: "More…" },
  { id: "education", title: "Education", moreHref: "/education", moreLabel: "More…" },
  { id: "contact", title: "Contact", moreHref: "#footer", moreLabel: "More…" },
];

export default function App() {
  const [activeId, setActiveId] = useState("summary");
  const refs = useRef({});

  useEffect(() => {
    // ScrollSpy via IntersectionObserver
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );

    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="shell">
      <Sidebar activeId={activeId} sections={SECTIONS} />
      <main className="content">
        <Header />
        {SECTIONS.map((s) => (
          <Section
            key={s.id}
            id={s.id}
            title={s.title}
            refCallback={(el) => (refs.current[s.id] = el)}
            moreHref={s.moreHref}
            moreLabel={s.moreLabel}
          >
            {/* sample placeholders—replace with your real content */}
            {s.id === "summary" && (
              <p>
                Visionary Developer Educator & Documentation Engineer focused on inclusive,
                high-impact developer experiences. Former Meta. Founder of TechniDox.
              </p>
            )}
            {s.id === "blog" && (
              <ul className="list">
                <li>Designing Doc Health metrics for AI teams</li>
                <li>Docs-as-data: pipelines for quality signals</li>
              </ul>
            )}
            {s.id === "speaking" && (
              <ul className="list">
                <li>Keynote—Docs Done Right (2024)</li>
                <li>Panel—Scaling Inclusive Docs for AI</li>
              </ul>
            )}
            {s.id === "publications" && (
              <ul className="list">
                <li>“Inclusive Documentation @ Scale” — Medium</li>
                <li>“Responsible AI needs Responsible Docs” — Substack</li>
              </ul>
            )}
            {s.id === "community" && (
              <p>
                Founder, Bay Area Black Tech Gala (3,500+ participants). Mentored 3k+ new technologists.
              </p>
            )}
            {s.id === "skills" && (
              <div className="tags">
                {["React", "Vite", "Node", "Python", "Docs Strategy", "DevRel", "AI/LLM", "Data Viz"].map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            )}
            {s.id === "education" && (
              <ul className="list">
                <li>Trinity College — (current) B.A. track</li>
                <li>Certs: GenAI Leader, etc.</li>
              </ul>
            )}
            {s.id === "contact" && (
              <p>
                Email: <a href="mailto:brittneyball.deved@gmail.com">brittneyball.deved@gmail.com</a> ·
                LinkedIn: <a href="https://linkedin.com/in/brittneyball">linkedin.com/in/brittneyball</a>
              </p>
            )}
          </Section>
        ))}
        <Footer />
      </main>
    </div>
  );
}
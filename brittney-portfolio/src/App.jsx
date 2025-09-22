import { useEffect, useMemo, useState } from "react";
import Sidebar from "./components/sidebar.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Landing from "./components/landing.jsx";
import "./style.css";

const SECTIONS = [
  { id: "home", title: "Home" },
  { id: "summary", title: "Summary" },
  { id: "blog", title: "Technical Blog" },
  { id: "speaking", title: "Speaking Engagements" },
  { id: "publications", title: "Publications" },
  { id: "community", title: "Community Involvement" },
  { id: "skills", title: "Core Competencies / Tech Skills" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];
function App() {
  const initial =
    (typeof window !== "undefined" && location.hash.slice(1)) || "home";
  const [activeId, setActiveId] = useState(
    SECTIONS.some((s) => s.id === initial) ? initial : "home"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="shell">
      <Sidebar sections={SECTIONS} activeId={activeId} onSelect={setActiveId} />
      <main className="content">
        <Header />
        {activeId === "home" ? (
          <Landing />
        ) : (
          <section className="section" id={activeId}>
            <div className="section-head">
              <h1 style={{ fontSize: "2rem", margin: 0 }}>
                {SECTIONS.find((s) => s.id === activeId)?.title}
              </h1>
            </div>
            <div className="section-body">
              {/* your existing per-section content map */}
            </div>
          </section>
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;

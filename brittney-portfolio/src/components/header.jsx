export default function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="title">Brittney Ball</h1>
        <p className="subtitle">Developer Educator • Documentation Engineer • Developer Advocate</p>
      </div>

      <div className="socials">
        {/* swap placeholders with your icons/links */}
        <a href="https://brittneyball.tech" target="_blank" rel="noreferrer">Site</a>
        <a href="https://github.com/brittneyball" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/brittneyball" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}

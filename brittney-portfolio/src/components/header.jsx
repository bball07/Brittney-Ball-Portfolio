// filepath: /workspaces/Brittney-Ball-Portfolio/brittney-portfolio/src/components/header.tsx

function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="title">Brittney Ball</h1>
        <p className="subtitle">
          Developer Educator • Documentation Engineer • Developer Advocate • Software Engineers
        </p>
      </div>
      <div className="socials">
        {/* swap placeholders with your icons/links */}
        <a href="https://brittneyball.tech" target="_blank" rel="noreferrer">Site</a>
        <a href="https://github.com/bball07" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/brittney-ball/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}

export default Header;

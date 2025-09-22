// filepath: /workspaces/Brittney-Ball-Portfolio/brittney-portfolio/src/components/sidebar.tsx

function Sidebar({ sections, activeId, onSelect }) {
  return (
    <aside className="sidebar" aria-label="Section navigation">
      <nav>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={activeId === s.id ? "nav-link active" : "nav-link"}
                onClick={e => {
                  e.preventDefault();
                  if (onSelect) onSelect(s.id);
                  window.location.hash = s.id;
                }}
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

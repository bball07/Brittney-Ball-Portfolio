export default function Sidebar({ sections, activeId }) {
  return (
    <aside className="sidebar" aria-label="Section navigation">
      <nav>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={activeId === s.id ? "nav-link active" : "nav-link"}
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

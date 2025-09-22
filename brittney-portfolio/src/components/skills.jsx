// filepath: /workspaces/Brittney-Ball-Portfolio/brittney-portfolio/src/components/skills.tsx

const Skills = forwardRef(function Skills(
  { id, title, children, refCallback, moreHref, moreLabel },
  _,
) {
  return (
    <section id={id} ref={refCallback} className="skills">
      <div className="skills-head">
        <h2>{title}</h2>
        {moreHref && (
          <a className="more" href={moreHref}>
            {moreLabel || "More…"}
          </a>
        )}
      </div>
      <div className="skills-body">{children}</div>
    </section>
  );
});

export default Skills;

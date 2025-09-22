// filepath: /workspaces/Brittney-Ball-Portfolio/brittney-portfolio/src/components/publications.tsx

const Publications = forwardRef(function Publications(
  { id, title, children, refCallback, moreHref, moreLabel },
  _,
) {
  return (
    <section id={id} ref={refCallback} className="publications">
      <div className="publications-head">
        <h2>{title}</h2>
        {moreHref && (
          <a className="more" href={moreHref}>
            {moreLabel || "More…"}
          </a>
        )}
      </div>
      <div className="publications-body">{children}</div>
    </section>
  );
});

export default Publications;

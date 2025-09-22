// filepath: /workspaces/Brittney-Ball-Portfolio/brittney-portfolio/src/components/summary.tsx

const Summary = forwardRef(function Summary(
  { id, title, children, refCallback, moreHref, moreLabel },
  _,
) {
  return (
    <section id={id} ref={refCallback} className="summary">
      <div className="summary-head">
        <h2>{title}</h2>
        {moreHref && (
          <a className="more" href={moreHref}>
            {moreLabel || "More…"}
          </a>
        )}
      </div>
      <div className="summary-body">{children}</div>
    </section>
  );
});

export default Summary;

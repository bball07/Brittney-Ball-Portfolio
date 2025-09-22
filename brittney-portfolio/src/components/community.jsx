// filepath: /workspaces/Brittney-Ball-Portfolio/brittney-portfolio/src/components/community.tsx

const Community = forwardRef(function Community(
  { id, title, children, refCallback, moreHref, moreLabel },
  _,
) {
  return (
    <section id={id} ref={refCallback} className="community">
      <div className="community-head">
        <h2>{title}</h2>
        {moreHref && (
          <a className="more" href={moreHref}>
            {moreLabel || "More…"}
          </a>
        )}
      </div>
      <div className="community-body">{children}</div>
    </section>
  );
});

export default Community;

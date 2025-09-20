import { forwardRef } from "react";

const Publications = forwardRef(function Publications(
  { id, title, children, refCallback, moreHref, moreLabel },
  _
) {
  return (
    <publication id={id} ref={refCallback} className="publications">
      <div className="publications-head">
        <h2>{title}</h2>
        {moreHref && (
          <a className="more" href={moreHref}>
            {moreLabel || "More…"}
          </a>
        )}
      </div>
      <div className="publications-body">{children}</div>
    </publication>
  );
});

export default Publications;

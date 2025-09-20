import { forwardRef } from "react";

const Summary = forwardRef(function Summary(
  { id, title, children, refCallback, moreHref, moreLabel },
  _
) {
  return (
    <summary id={id} ref={refCallback} className="summary">
      <div className="summary-head">
        <h2>{title}</h2>
        {moreHref && (
          <a className="more" href={moreHref}>
            {moreLabel || "More…"}
          </a>
        )}
      </div>
      <div className="summary-body">{children}</div>
    </summary>
  );
});

export default Summary;

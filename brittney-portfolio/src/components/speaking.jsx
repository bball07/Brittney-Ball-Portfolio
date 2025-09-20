import { forwardRef } from "react";

const Speaking = forwardRef(function Speaking(
  { id, title, children, refCallback, moreHref, moreLabel },
  _
) {
  return (
    <Speaking id={id} ref={refCallback} className="speaking">
      <div className="speaking-head">
        <h2>{title}</h2>
        {moreHref && (
          <a className="more" href={moreHref}>
            {moreLabel || "More…"}
          </a>
        )}
      </div>
      <div className="speaking-body">{children}</div>
    </Speaking>
  );
});

export default Speaking;

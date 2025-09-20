import { forwardRef } from "react";

const Blog = forwardRef(function Blog(
  { id, title, children, refCallback, moreHref, moreLabel },
  _
) {
  return (
    <Blog id={id} ref={refCallback} className="blog">
      <div className="blog-head">
        <h2>{title}</h2>
        {moreHref && (
          <a className="more" href={moreHref}>
            {moreLabel || "More…"}
          </a>
        )}
      </div>
      <div className="blog-body">{children}</div>
    </Blog>
  );
});

export default Blog;

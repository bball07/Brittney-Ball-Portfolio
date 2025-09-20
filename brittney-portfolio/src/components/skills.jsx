import { forwardRef } from "react";

const Skills = forwardRef(function Skills(
  { id, title, children, refCallback, moreHref, moreLabel },
  _
) {
  return (
    <Skills id={id} ref={refCallback} className="skills">
      <div className="skills-head">
        <h2>{title}</h2>
        {moreHref && (
          <a className="more" href={moreHref}>
            {moreLabel || "More…"}
          </a>
        )}
      </div>
      <div className="skills-body">{children}</div>
    </Skills>
  );
});

export default Skills;

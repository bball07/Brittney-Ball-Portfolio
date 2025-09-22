import React, { useState, useEffect } from "react";
import {
  loadBlogCollection,
  loadSpeakingCollection,
  loadPublicationsCollection,
  loadCommunityCollection,
  loadMdFile,
  loadJson,
} from "../lib/contentloader.jsx";
import Section from "./section.jsx";

export default function Landing() {
  const [state, setState] = useState({
    summary: "",
    blog: [],
    speaking: [],
    publications: [],
    community: [],
    skills: [],
    ready: false,
  });

  useEffect(() => {
    (async () => {
      const [summary, skills, blog, speaking, publications, community] =
        await Promise.all([
          loadMdFile("/content/summary.md"),
          loadJson("/content/skills.json"),
          loadBlogCollection(),
          loadSpeakingCollection(),
          loadPublicationsCollection(),
          loadCommunityCollection(),
        ]);
      setState({
        summary,
        skills,
        blog,
        speaking,
        publications,
        community,
        ready: true,
      });
    })();
  }, []);

  if (!state.ready) return <p>Loading…</p>;

  return (
    <div className="landing">
      <Section id="summary" title="Summary" moreHref="#summary" moreLabel="View Profile">
        <p>{state.summary}</p>
      </Section>

      <Section id="blog" title="Latest Blog Posts" moreHref="#blog" moreLabel="See all">
        <ul className="list">
          {state.blog.slice(0, 3).map((p) => (
            <li key={p._path}>
              <a href={p.href || "#blog"}>{p.title}</a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="speaking" title="Recent Speaking" moreHref="#speaking" moreLabel="See all">
        <ul className="list">
          {state.speaking.slice(0, 3).map((t) => (
            <li key={t._path}>
              <a href={t.href || "#speaking"}>{t.title}</a>
              {t.event ? ` — ${t.event}` : ""}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="publications" title="Publications" moreHref="#publications" moreLabel="See all">
        <ul className="list">
          {state.publications.slice(0, 5).map((p) => (
            <li key={p._path}>
              <a href={p.href || "#publications"}>{p.title}</a>
              {p.outlet ? ` — ${p.outlet}` : ""}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="community" title="Community Involvement" moreHref="#community" moreLabel="See all">
        <ul className="list">
          {state.community.slice(0, 5).map((c) => (
            <li key={c._path}>
              <a href={c.href || "#community"}>{c.title}</a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Tech Skills" moreHref="#skills" moreLabel="Full list">
        <div className="tags">
          {state.skills.slice(0, 8).map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
}

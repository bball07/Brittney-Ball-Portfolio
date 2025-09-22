// src/lib/contentLoader.js
import matter from "gray-matter";

/** Load markdown collection (blog/speaking/publications/community) sorted by date desc */
function parseMdCollection(modules) {
  const items = Object.entries(modules).map(([path, raw]) => {
    const { data, content } = matter(raw);
    const date = data.date ? new Date(data.date) : null;
    return {
      ...data,
      body: content,
      _path: path,
      _date: date ? date.getTime() : 0,
      title: data.title || path.split("/").pop().replace(/\.md$/, ""),
    };
  });
  return items.sort((a, b) => b._date - a._date);
}

export async function loadBlogCollection() {
  const modules = import.meta.glob("../data/content/blogs/*.md", {
    eager: true,
    as: "raw",
  });
  return parseMdCollection(modules);
}
export async function loadSpeakingCollection() {
  const modules = import.meta.glob("../data/content/speaking/*.md", {
    eager: true,
    as: "raw",
  });
  return parseMdCollection(modules);
}
export async function loadPublicationsCollection() {
  const modules = import.meta.glob("../data/content/publications/*.md", {
    eager: true,
    as: "raw",
  });
  return parseMdCollection(modules);
}
export async function loadCommunityCollection() {
  const modules = import.meta.glob("../data/content/community/*.md", {
    eager: true,
    as: "raw",
  });
  return parseMdCollection(modules);
}

/** Load a single markdown file (e.g., summary.md) */
export async function loadMdFile(path) {
  const raw = await import(/* @vite-ignore */ path + "?raw");
  const { content } = matter(raw.default || raw);
  return content.trim();
}

/** Load JSON (e.g., skills.json) */
export async function loadJson(path) {
  const data = await import(/* @vite-ignore */ path, {
    assert: { type: "json" },
  });
  return (data.default || data).skills || [];
}

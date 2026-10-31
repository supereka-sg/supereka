import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getRouteMeta } from "../seo/meta";

const setTag = (selector, create, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(el.tagName === "LINK" ? "href" : "content", value);
};

// Keeps <title>, description and canonical in step with client-side navigation.
// The first load already has these baked into the prerendered HTML.
const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalised = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const meta = getRouteMeta(normalised === "//" ? "/" : normalised);
    document.title = meta.title;
    setTag(
      'meta[name="description"]',
      () => Object.assign(document.createElement("meta"), { name: "description" }),
      meta.description
    );
    setTag(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement("link"), { rel: "canonical" }),
      `${window.location.origin}${meta.path}`
    );
  }, [pathname]);

  return null;
};

export default RouteMeta;

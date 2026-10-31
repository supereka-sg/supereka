import { useEffect, useState } from "react";

// Renders children only in the browser, so heavy WebGL code stays out of the
// prerendered HTML and the server bundle.
const ClientOnly = ({ children, fallback = null }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? children : fallback;
};

export default ClientOnly;

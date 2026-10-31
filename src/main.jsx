import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Prerendered pages already contain markup, so hydrate instead of re-rendering.
if (root.children.length > 0) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}

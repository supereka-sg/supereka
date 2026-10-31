import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import ProjectsPage from "./pages/ProjectsPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFound from "./pages/NotFound";
import RouteMeta from "./components/RouteMeta";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <>
    <RouteMeta />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<CaseStudyPage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;

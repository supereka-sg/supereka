import { lazy, Suspense } from "react";

import { Hero, Navbar, About, Services, Works, Contact, Footer, ClientOnly } from "../components";

const StarsCanvas = lazy(() => import("../components/canvas/Stars"));

const Home = () => (
  <div className="relative z-0 bg-background">
    <div className="bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Services />
    <Works />
    <div className="relative z-0">
      <Contact />
      <ClientOnly>
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </ClientOnly>
    </div>
    <Footer />
  </div>
);

export default Home;

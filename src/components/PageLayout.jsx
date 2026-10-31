import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }) => (
  <div className="relative z-0 bg-background min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;

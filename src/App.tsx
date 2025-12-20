import BackgroundGradient from "./components/BackgroundGradient";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Stack from "./components/Stack";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      <BackgroundGradient />

      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Project />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

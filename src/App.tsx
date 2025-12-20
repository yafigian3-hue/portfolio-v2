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
    <>
      <BackgroundGradient />
      <Navbar />
      <Home />
      <About />
      <Stack />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

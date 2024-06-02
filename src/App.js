import Navbar from "./component/navbar";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

function App() {
  return (
    <div className="bg-slate-100 h-fit flex flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

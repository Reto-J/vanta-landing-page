import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Solutions from "./components/Solutions";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App(){
  return (
    <>
    <Navbar />
      <main>
          <Hero />
          <TrustedBy />
          <Features />
          <About />
          <HowItWorks />
          <Solutions />
          <Statistics />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
          <Footer />
      </main>
    </>
  );
}

export default App;

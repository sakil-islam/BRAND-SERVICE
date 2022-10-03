import React from "react";
import About from "./components/About/About";
import AllInOne from "./components/AllInOne/AllInOne";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;

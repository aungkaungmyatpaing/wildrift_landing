import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Recharge from "./components/Recharge";
import RiotID from "./components/RiotID";
import Cards from "./components/Cards";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Recharge/>
        <RiotID/>
        <Cards/>
        <Footer/>
    </div>
  );
}

export default App;

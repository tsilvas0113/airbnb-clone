import React from "react";
import Katie from './images/katie-zaferes.png'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App () {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Card 
                img = {Katie}
                rating = '5.0'
                reviewCount = {6}
                country = "USA"
                title = "Life Lessons with Katie Zaferes"
                price = {136}
            />
        </div>
    )
}

export default App
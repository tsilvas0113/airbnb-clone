import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App () {
    const elements = data.map(item => {
        return <Card 
            key = {item.id}
            {...item}
        />
    })
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <div className="card-list">
                {elements}
            </div>
        </div>
    )
}

export default App
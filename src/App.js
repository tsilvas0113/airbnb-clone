import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App () {
    const elements = data.map(item => {
        return <Card 
            id = {item.id}
            title = {item.title}
            description = {item.description}
            price = {item.price}
            img = {item.coverImg}
            stats = {item.stats}
            location = {item.location}
            spots = {item.openSpots}
        />
    })
    return (
        <div className="container">
            <Navbar />
            <Hero />
            {elements}
        </div>
    )
}

export default App
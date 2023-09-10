import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Tab from "./Tab";

const Cards = () => {
const [card,setCard] = useState([]);
const [tab, setTab] = useState([])

useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/videos/categories')
    .then(res => res.json())
    .then(data => setTab(data.data))
},[])

useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    .then(res => res.json())
    .then(data => setCard(data.data))
},[])


    return (
        <div>
            <div className="grid grid-cols-4">
            {
                tab.map((tab,idx) => <Tab key={idx} tab={tab}></Tab>)
            }
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 container mx-auto px-1 md:px-2 lg:px-9">
            {
                card.map((card,idx) => <Card key={idx} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;
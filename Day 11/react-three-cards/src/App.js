import reacy from "react";
import card from "./Card";
import "./App.css";

function APP(){
  const cards =[
    {title: "Card 1", content: "first", color : "white"},
    {title: "Card 2", content: "first", color : "white"},
    {title: "Card 3", content: "first", color : "white"},
  
];
return(
  <div className="container"> 
  {
    card.map((card,index)=>{
      <Card key= {index}{...Card}
    })
  }
  
  
  </div>
)


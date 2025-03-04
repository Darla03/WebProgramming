import {useState} from 'react';

export default function MoodTracker(){
    const [mood, setMood] =useState("😃");

    return(
        <div stylr={{textAlign:"center",padding: "20px"}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <button 
            onClick={()=>setMood("😭")} 
            style={{margin:"5px", 
            padding:"10px", background:"lightgreen"}} >very happy 
            </button>
           <button onClick={()=>setMood("🥺")} 
            style={{margin:"5px", 
            padding:"10px", background:"lightblue"}} > sad
            </button>

            <button onClick={()=>setMood("😒")} 
            style={{margin:"5px", 
            padding:"10px", background:"lightblue"}} > unamused
            </button>

            <button onClick={()=>setMood("🤓")} 
            style={{margin:"5px", 
            padding:"10px", background:"lightblue"}} > nerdy
            </button>

        </div>
    );
}
import {useState} from 'react';

export default function MoodTracker(){
    const [mood, setMood] =useState("😀");

    const moodDetails = {
    "😀": {description: "Feeling very happy I could skip and click my feet together", color:"#FFD700", link:"https://youtu.be/MOWDb2TBYDg?si=HIUV1IJ6dGj_7Lw0", message: "My happiest memory is every time I get to see my husband. But so far my happiest memory is when we got married!"},
    "🥺": { description: "A little sad but it could be worse.",color:"lightblue", link:"https://youtu.be/VD5Q8EPY1Fc?si=nJCn5rwepx5-EABo",message:"This is me every time my husband says no to me. Funny story is he only tells me no when I don't live with him. but then he will have the audacity to call me spoiled."},
    "😒": { description: "Not impressed, just meh.", color:"#07850d", link: "https://youtu.be/1wBjBYT-1Do?si=GZLfD4MH0AWGpZxG", message: "I normally act this way towards some of my friends when they tell me things and I act like it wasn't serious just to get on their nerves."},
    "🤓": { description: "Feeling nerdy and productive!", color:"orange", link:"https://youtu.be/sYSvdXTCd50?si=5Wf_F2a8DL-5H_f_",message:"Being in the first trimester I feel the opposite of this. 😂"},
    };
    return(
        <div style={{textAlign:"center",padding: "20px", backgroundColor: moodDetails[mood].color}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <p>{moodDetails[mood].description}</p>

            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {moodDetails[mood].message}
            </p>
         

            <button 
            onClick={()=>setMood("😀")} 
            style={{margin:"5px", 
            padding:"10px", background:"lightgreen"}} >Happy
            
            </button>

           <button onClick={()=>setMood("🥺")} 
            style={{margin:"5px", 
            padding:"10px", background:"peachpuff"}} > Sad
            </button>

            <button onClick={()=>setMood("😒")} 
            style={{margin:"5px", 
            padding:"10px", background:"#ff8863"}} > Unamused
            </button>

            <button onClick={()=>setMood("🤓")} 
            style={{margin:"5px", 
            padding:"10px", background:"lightpink"}} > Nerdy
            </button>
            {moodDetails[mood].link && (
                <div style={{ marginTop: "20px" }}>
                    <a href={moodDetails[mood].link}>
                        <button style={{ padding: "10px", background: "white", border: 2, cursor: "pointer" }}>
                            Click to hear music or watch something for mood🎵
                        </button>
                    </a>
                    </div>
                )}
        </div>
    );

}
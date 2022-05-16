// useState hook
import './App.css';
import {useState, useEffect} from 'react';

function AppThree(){
    const [emotion, setEmotion] = useState("happy") // This is going to return an array, in which first item will be state variable, and second will be function use to update state
    useEffect(()=>{
        console.log(`It's ${emotion} around here!`)
    })
    return (
        <>
        {/* below part h1, and 3 buttons are useState */}
        <h1>Current emotion is {emotion}.</h1>
        <button onClick={()=>setEmotion("happy")}>
            Happy
        </button>
        <button onClick={()=>setEmotion("frustrated")}>
            Frustrate
        </button>
        <button onClick={()=>setEmotion("enthusiastic")}>
            Enthuse
        </button>
        </>
    )
}

export default AppThree
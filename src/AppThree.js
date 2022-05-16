// useState hook
// UseEffect Hook
import './App.css';
import {useState, useEffect} from 'react';

function AppThree(){
    const [emotion, setEmotion] = useState("happy") // This is going to return an array, in which first item will be state variable, and second will be function use to update state
    const [secondary, setSecondary] = useState("tired")
    //It's an side effect, and it takes two arguments in which second is array. This array will see the state change and call the function.
    useEffect(()=>{ 
        console.log(`It's ${emotion} around here!`)
    },[emotion])
    useEffect(()=>{
        console.log(`It's ${secondary} around here!`)
    },[secondary])
    return (
        <>
        {/* below part h1, and 4 buttons are useState */}
        <h1>Current emotion is {emotion} and {secondary}.</h1>
        <button onClick={()=>setEmotion("happy")}>
            Make Happy
        </button>
        <button onClick={()=>setEmotion("frustrated")}>
            Frustrate
        </button>
        <button onClick={()=>setEmotion("enthusiastic")}>
            Enthuse
        </button>
        <button onClick={()=>setSecondary("crabby")}>
            Make Crabby
        </button>
        </>
    )
}

export default AppThree
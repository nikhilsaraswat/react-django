// use Reducer
import './App.css';
import {useReducer} from 'react'


function AppFour(){
    const [checked, toggle] = useReducer((    // toggle is an reducer function, it will take two argument intial state and function.
        checked => !checked),
        false)

    return (
        <>
        
        <input type="checkbox" 
        value={checked} 
        onChange={toggle}/>
        <p>{checked ? "checked" : "not checked"} </p>
        </>
    )
}

export default AppFour
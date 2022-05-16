import './App.css';

function SecretComponent(){
    return <h1>Super Secret information for authorized users only.</h1>
}
function RegularComponent(){
    return <h1>Everyone can see this component.</h1>
}
// function AppTwo(props){  Instead of using this function we can use {authorized}
//     // if(props.authorized){          Either we can use this as if-else, or
//     //     return <SecretComponent/>
//     // }else{
//     //     return <RegularComponent/>
//     // }
//     // We can use terniary statement with ? :, in place of if-else statement
//     return(
//         <>
//         {props.authorized ? <SecretComponent/> : <RegularComponent/>}
//         </>
//     )
    
// }
function AppTwo({authorized}){
    // if(props.authorized){          Either we can use this as if-else, or
    //     return <SecretComponent/>
    // }else{
    //     return <RegularComponent/>
    // }
    // We can use terniary statement with ? :, in place of if-else statement
    return(
        <>
        {authorized ? <SecretComponent/> : <RegularComponent/>}
        </>
    )
    
}

export default AppTwo
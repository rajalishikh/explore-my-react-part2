import { useState } from "react";


export default function Player() {
    // add the state for  changing the plyer number 
    const [plyer, setPlyer] = useState(5);
    // style the plyer section 
    const design = {
        border: '1px solid green ',
        margin: '15px',
        padding: '15px',
        borderRadius:'15px'
    }
    // add evenhandler for add the plyer number 
    const addHandler = () => {
        const addNumber = plyer + 1;
        setPlyer(addNumber)
    }
    // remove the plyer
    const removePlyer = () => {
        const deletePlyer = plyer - 1;
        setPlyer(deletePlyer)
    }
    // show the plyer path 
    return (
        <div style={design} >
            <h3>Plyer number :{plyer}</h3>
            <button onClick={addHandler}>AddPlyer</button>
            <button onClick={removePlyer}> RemovePlyer</button>
    </div>
    )
    
}
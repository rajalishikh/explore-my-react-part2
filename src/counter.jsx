import { useState } from "react";

export default function Counter() {
    const [Count, setCount] = useState(0);
    const handleAdd1 = () => {
        const newCount = Count + 1;
        setCount(newCount);

    }
    const handleReMove1=() => {
        const removeCount = Count - 1;
        setCount(removeCount);
    }
        
    
    return (
        <div style={{border:'1px solid green'}} >
            <h3>Hello guys: {Count} </h3>
            <button onClick={handleAdd1}>Add me</button>
            <button onClick={handleReMove1} >Remove me </button>
        </div>
    )
}
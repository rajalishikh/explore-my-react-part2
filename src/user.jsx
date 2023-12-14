import { useEffect, useState } from "react"

export default function User() {
    // styler the section 
    const design = {
        border: '1px solid red ',
        margin: '15px',
        padding: '15px',
        borderRadius:'15px'
    }
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
        .then(json=>setUser(json))
        
    },[])
    return (
        <div style={design} >
            <h3>The total user is :{user.length} </h3>
        </div>
    )
}
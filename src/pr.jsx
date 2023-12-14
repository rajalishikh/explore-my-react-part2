import { useEffect, useState } from "react"
import Details from "./prDeatails"

export default function Practice() {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(data => setUser(data))
    },[])
    return (
        <div className="user">
            <h1>Users:{user.length}</h1>
            {
                user.map(data2=><Details Details2={data2}></Details>)
            }
        </div>
    )
}
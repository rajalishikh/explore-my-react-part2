import { useEffect, useState } from 'react';

import './friend.css';
import Friend1 from './Name';
export default function Friends() {
    const [friend, setFriend] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(data=>setFriend(data))
    }, [])
    
    
    return (
        <div className="box">
            Name:{friend.length}
            {
                friend.map(data => <Friend1 friend2={data}></Friend1>)
           }

            
        </div>
    )
}
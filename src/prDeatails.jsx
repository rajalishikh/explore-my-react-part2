// line 2 r details a problem 
export default function Details({ Details2 }) {
    
    const {userId,title,body} = Details2;

    return (
        <div className="box">
            <p>userId:{ userId}</p>
            <p>Title:{ title}</p>
            <p>Body:{ body}</p>
            
        </div>
    )
    
}
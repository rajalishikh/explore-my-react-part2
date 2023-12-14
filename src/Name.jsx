export default function Friend1({ friend2 }) {
    
    const {name, email } = friend2;
    return (
        <div className="box">
            <p>Name:{name} </p>
            <p>email:{email} </p>
            
        </div>
    )
    
}

import './App.css';
import Counter from './counter';
import Friends from './friends';
import Player from './plyer';
import Practice from './pr';
import User from './user';

function App() {
  
  function handleClick() {
    alert("Allah is all ways watching me ")
  }
  const handleClick2 = () => {
    alert('A man is never found anything untill he try it ')
  }
  function add(number) {
    alert( number+5);
    
  }
  

  return (
    <>
      <h3>React Explore part 2 </h3>
      <Practice></Practice>
      <Counter></Counter>
      <Player></Player>
      <User></User>
      <Friends></Friends>
      <button onClick={handleClick} >Good Sms</button>
      <button onClick={handleClick2} >Heard work </button>
      <button onClick={() => {
        alert('যদি বিএয়া কে করা হই শজা জিন্নাহ হইএয়া যাবে কথিন')
      }}>Marriege  </button>
      <button onClick={() => add(5)}>Add me </button>
      
      
      
    </>
  )
}

export default App

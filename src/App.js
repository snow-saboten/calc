import {useState} from 'react';
import './App.css';

function App() {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');

  
  return (
    <>
      <h1>電卓</h1>
      <div>
        <h4>足し算</h4>
        <input type='number' onChange={(event) => setLeft(event.target.value)}></input>+<input type='number' onChange={(event) => setRight(event.target.value)}></input><br></br>
        答え：<p>{Number(left)+Number(right)}</p>
      </div>
    </>
    
  );
}

export default App;

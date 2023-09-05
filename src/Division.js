import {useState} from 'react';

export const Division = () => {
    const [left, setLeft] = useState('');
    const [right, setRight] = useState('');
  
    return (
        <>
        <div>
          <h4>割り算</h4>
          <input type='number' onChange={(event) => setLeft(event.target.value)}></input>÷<input type='number' onChange={(event) => setRight(event.target.value)}></input><br></br>
          答え：{Number(left) / Number(right)}
        </div>
      </>
    )
}
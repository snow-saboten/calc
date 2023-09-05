import {useState} from 'react';

export const MathOp = ({title, op}) => {
    const [left, setLeft] = useState('');
    const [right, setRight] = useState('');
    let mark = '';
    
    if(op==='1'){
      mark = '+';
    }else if(op==='2'){
      mark = '-';
    }else if(op==='3'){
      mark = 'x';
    }else{
      mark = '÷';
    }

    const changeExpression = (op) => {
      if(op==='1'){
        return Number(left) + Number(right);
      }else if(op==='2'){
        return Number(left) - Number(right);
      }else if(op==='3'){
        return Number(left) * Number(right);
      }else{
        return Number(left) / Number(right);
      }
    }
  
    return (
        <>
        <div>
          <h4>{title}</h4>
          <input type='number' onChange={(event) => setLeft(event.target.value)}></input>{mark}<input type='number' onChange={(event) => setRight(event.target.value)}></input><br></br>
          答え：{changeExpression(op)}
        </div>
      </>
    )
}
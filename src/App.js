import { MathOp } from "./MathOp";

function App() {
  return (
    <>
      <h1>電卓</h1>
      <MathOp title='足し算' op='1'/>
      <MathOp title='引き算' op='2'/>
      <MathOp title='掛け算' op='3'/>
      <MathOp title='割り算' op='4'/>
    </>
   
  );
}

export default App;

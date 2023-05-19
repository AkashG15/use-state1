import logo from './logo.svg';
import './App.css';
import Sub from './components/Sub/Sub';
import Add from './components/Add/Add';
import { useState } from 'react';

function App() {

  const [inputValue,setInputValue]= useState(0);
  //const [inputValue1,setInputValue1]= useState(1);
  const [inputValue2,setInputValue2]= useState(0);

  const printValue= ()=>{
    console.log("inputValuePrint",inputValue);
    console.log("inputValuePrint",inputValue2);

  }
  return (
   <div>
     <h1> First React project</h1>
     <div>
    Input 1  <input 
      value={inputValue}

      onChange={(e)=>{
          setInputValue(e.target.value)
          console.log("InputValue",inputValue);
      }}  
      type ="number" placeholder='Enter Number' />
    <br></br><br></br>
    Input 2  <input 
      value={inputValue2}

      onChange={(e)=>{
          setInputValue2(e.target.value)
          console.log("InputValue",inputValue2);
      }}  
      type ="number" placeholder='Enter Number' />

     </div>


  <p> test p tag </p>

  <button onClick={printValue}> Print</button>  

{inputValue ? <Add a={inputValue} b={inputValue2} ></Add>:""}
  <Sub a='2' b='2' />
   </div>
  );
}

export default App;

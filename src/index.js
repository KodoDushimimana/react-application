import React from 'react';
import ReactDOM from 'react-dom';



const a = 'string'
 if(a ===5){
   console.log(` a is ${a}`)
 }else{
   console.log('NOthing')
 }
const element =( 
  <div>
    <p>{a}</p>
    <ul>
      <li>Item 1</li>
      <li>Item 1</li>
      <li>Item 1</li>
    </ul>
 React is  {5+5} times easy to learn

  </div>
  
  )

ReactDOM.render(element, document.getElementById('root'))
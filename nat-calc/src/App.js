import { useState } from 'react'

import './App.css';

function App() {
  const [firstNum, setFirstNum] = useState(0)
  const [secNum, setSecNum] = useState(0)
  const [total, setTotal] = useState(firstNum + secNum)
  const add = () => {setTotal(firstNum + secNum)}
  const sub = () => {setTotal(firstNum - secNum)}
  const mult = () => {setTotal(firstNum * secNum)}
  const divide = () => {setTotal(firstNum / secNum)}

  const equal = () => {
  let submit = null
  if (total === 'add'){submit = setTotal(firstNum + secNum) }
  else if (total === 'sub'){submit = setTotal(firstNum - secNum)}
  else if (total === 'mult'){submit = setTotal(firstNum * secNum)}
  else if (total === 'divide'){submit = setTotal(firstNum / secNum)}
}


const handleSubmit = (e) => {
e.preventDefault()
{ }

}

return (


<div className='container'>
<from onSubmit = {handleSubmit}>

  <input type='number' name='firstNum' placeholder='0' onChange={(e) => setFirstNum(+e.target.value)}/>

  <input type='number' name='secondNum' placeholder='0' onChange={(e) => setSecNum(+e.target.value)} />

  <button onClick={equal} type='submit'>=</button>

  <h2>{total}</h2>
</from>

<div className='func'>
  <button onClick={add} className='add'>+</button>
  <button onClick={sub} className='subtract'>-</button>
  <button onClick={mult} className='multiply'>x</button>
  <button onClick={divide} className='divide'>/</button>
</div>
</div>
  );
}

export default App;

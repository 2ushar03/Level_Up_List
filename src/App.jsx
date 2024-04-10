import { useState } from 'react'
import './App.css'
import axios from "axios"
import Todoitm from './todoitm';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';

function App() {
  const [name,setName]=useState("");
  const [itemName,setItemname]=useState([]);
  function handleChange(event){
    setName(event.target.value);
  }


  const handleadd=()=>{
    axios.post('http://localhost:3000',{name:name})
    .then(result=>(console.log(result)),(location.reload()))
    .catch(err=>console.log(err)),
  []}

    useEffect(()=>{
      axios.get('http://localhost:3000/')
      .then(result=>setItemname(result.data))
      .catch(err=>console.log(err))
    },[])
  function additems(){
    setItemname((prev)=>[...prev,name])
    setName("");
  }

  return (
    <div className='container' >
      <div>
        <h1 className='title'>Level Up List</h1>
      </div>
      <input className="inputval" type='text'  onChange={handleChange}/>
      <button onClick={() => {additems(); handleadd();}}
        className='btn1'>
        <AddIcon/>
      </button>
      <div className='list'>
        <ul>
        {itemName.map((todolist)=>(
          <div>
          <Todoitm 
          text={todolist.name}
          id={todolist._id}/>
          </div>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default App
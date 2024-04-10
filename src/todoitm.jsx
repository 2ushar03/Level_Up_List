import React from "react";
import "./todo.css"
import ClearIcon from '@mui/icons-material/Clear';
import axios from "axios"
function todoitm(props){
    
    function handleDelete(id){
        axios.delete('http://localhost:3000/'+id)
        .then(result=>{
            location.reload();
        })
        .catch(err=>console.log(err))
      }

    return(
        <div className="note">
            <li className="text">
                {props.text}
            </li>
            <button className="btn" onClick={()=>{handleDelete(props.id)}} ><ClearIcon/></button>
        </div>
    );
}
export default todoitm;
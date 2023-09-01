import React, { useState } from 'react'
import "../styles/home.css"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let Dish;




const Home = () => {

  const[user,setuser] = useState("")

  const name = () => {

    Dish = document.getElementById('place').value;
   document.getElementById('place').value = "";
  
  }
    
    

const simple = (e)=> { if(user==="") {
   e.preventDefault() 
   toast("Name must be Filled",{autoClose:2000})
}
}

  return (
    <div className="container-fluid">
        <div className="row custom d-grid">
            <div className="col-12 customcol d-flex flex-column align-items-center gap-5 ">
                
                <h1 className='mt-5 text-center' >Chat Application</h1 >
                <input type="text" placeholder='Name' id='place'  onChange={(event)=>{setuser(event.target.value)}} />
               <Link  to = "/chat"  onClick={simple}  > <button onClick={name}  className=' btn ' style={{backgroundColor:'grey'}}>Join Chat Room</button></Link> 
                
                </div></div>
    </div>
  )
}

export default Home
export { Dish }
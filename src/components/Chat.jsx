import React, { useEffect, useState } from 'react'
import { Dish } from "../components/Home.jsx"
import socketIo from "socket.io-client"
import "../styles/chat.css"
import ReactScrollToBottom from "react-scroll-to-bottom"
import Message from './Message.jsx'


let socket = socketIo("https://chatserver-ochre.vercel.app/",{ transports : ['websocket'] })

const Chat = () => {

  const [id,setid] = useState("")
  const[whatsapp,setwhatsapp] = useState([])

  const sendmessage = ()=>{
    const messagety = document.getElementById('input').value ;
    socket.emit('message',{messagety,it:socket.id})
    document.getElementById('input').value ="" ;}
    

useEffect(() => {
 
  socket.on("connect",()=>{

      setid(socket.id)
})


  socket.emit("first",{Dish})
  socket.on('userjoined',({message})=>{console.log(message)})
  socket.on("left",({message})=>{console.log(message)})
  socket.on('wholesome',(data)=>{
    setwhatsapp([...whatsapp,data])
  })
  return () => {


  }
},[whatsapp])

// useEffect(() => {



//   return () => {
   
//   }
// }, [])




  return (<>
  <div className="tt flex flex-column">
    <ReactScrollToBottom className="message"> <h1 className='text-center' style={{color:'white',fontFamily:'cursive',fontWeight:700 , height:'10vmax'}}> Heisenberg Chat Server Demo Version 1.1</h1> {whatsapp.map((item)=> <Message user={item.user} messagety= {item.messagety}  />)} </ReactScrollToBottom>
    <div className=" d-flex  flex-row chat">
    <input type="text" placeholder='Message' className='holder mt-1 ' id='input'  />
    <button className='butti align-self-end mt-3' onClick={sendmessage} ><i class="bi bi-send"></i></button>
    </div>
    </div>

</>
  )
}


export default Chat ;
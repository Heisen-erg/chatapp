import React from 'react'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import Chat from './components/Chat'


const App = () => {
 

  return (
    <Router>
     <ToastContainer/>
      <Routes>
      
        <Route exact path='/' element={<Home/>} />
        <Route path='/chat' element={<Chat/>} />
      </Routes>
    
    </Router>
  )
}

export default App
import React from 'react'
import "../styles/message.css"

const Message = ({user,messagety}) => {


    if(user){ 
  return (
    <div className='messagebox'>  <span id="bb">{`${user}:`}</span> { `${messagety}`} </div>
  )
    }
    else{
        return(
            <div className='messagebox'> {`Unknown:${messagety}`} </div>

        )
    }
}

export default Message
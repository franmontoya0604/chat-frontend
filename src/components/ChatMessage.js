import React from 'react'
import './styles/chatMessage.css'

const ChatMessage = (props) => {



   const { message, _id ,user} = props.message;

   const messageClass = user._id === props.currentId ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
     

      <i className="fa-solid fa-circle-user"></i>
      <div className="message-p">
        <p className="username">{user.name}</p>
        <p>{message}</p>
        </div>
      </div>
    </>)
}

export default ChatMessage
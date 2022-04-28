import React from 'react'
import ChatRoom from '../components/ChatRoom'
import Header from '../components/Header'
import './styles/home.css'

const Home = () => {
  return (
    <>
   
    <div className="home container pl-0 pr-0">
   
  
        <Header/>
        <section>
   <ChatRoom/>
    </section>
    
    </div>
    </>
  )
}

export default Home
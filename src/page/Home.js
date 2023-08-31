import React from 'react'
import "../styles/Home.css"
import MenuBar from '../components/MenuBar'
import Navigation from '../components/Navigation'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div className='container'>
      <header className='header'>
        <MenuBar />
        <Navigation />
      </header>
      <Gallery />
    </div>
  )
}

export default Home
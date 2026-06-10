import React from 'react'
import './App.css'
import UserCard from './Components/UserCard.jsx'

function App() {
  return (
    <div>
      <UserCard/>
      <UserCard username="Sakshi" position="Backend Developer" country="UnitedStates"/>
      <UserCard/>
      <UserCard/>
    </div>
  )
}

export default App

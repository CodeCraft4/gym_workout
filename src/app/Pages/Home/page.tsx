import React from 'react'
import Header from './components/Header/Header'
import PhysiquePlayer from './components/Players/PhysiquePlayer'
import Trainers from './components/Trainers/Trainers'

const Home = () => {
  return (
    <div>
      <Header/>
      <PhysiquePlayer/>
      <Trainers/>
    </div>
  )
}

export default Home

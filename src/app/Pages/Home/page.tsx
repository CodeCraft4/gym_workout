import React from 'react'
import Header from './components/Header/Header'
import PhysiquePlayer from './components/Players/PhysiquePlayer'
import Trainers from './components/Trainers/Trainers'
import GYMAbout from './components/AboutGym/AboutGym'

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <GYMAbout/>
      <PhysiquePlayer/>
      <Trainers/>
    </React.Fragment>
  )
}

export default Home

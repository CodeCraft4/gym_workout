import React from 'react'
import PlayerCard from './components/Cards/PlayerCard'
import { Typography } from '@mui/material'

const Players = () => {
  return (
    <div>
      <Typography
      sx={{
        fontSize:{md:100,sm:100,xs:50},
        textAlign:"center",
        mt:10,
        p:5,
        fontWeight:900
      }}
      >ALL PLAYERS</Typography>
      <PlayerCard/>
    </div>
  )
}

export default Players

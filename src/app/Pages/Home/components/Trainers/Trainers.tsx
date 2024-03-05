import { COLORS } from '@/constant/color'
import { Typography } from '@mui/material'
import React from 'react'
import OurTrainers from './components/OurTrainers'

const Trainers = () => {
  return (
    <div>
       <Typography
       sx={{
        fontSize:{md:100,sm:100,xs:40},
        mt:10,
        textAlign:"center",
        fontWeight:900,
        textDecoration:"underline",
        color: COLORS.primary.aqua,
        textShadow:{md:"2px 9px 15px black",sm:"2px 9px 15px black",xs:"none"},
        p:5,
        fontFamily:"fantasy",
        letterSpacing:5
       }}
       >
        TRAINER...
       </Typography>
       <OurTrainers/>
    </div>
  )
}

export default Trainers

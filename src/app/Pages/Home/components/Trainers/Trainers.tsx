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
        color: COLORS.whiteGrey.blueGray
       }}
       >
        TRAINER...
       </Typography>
       <OurTrainers/>
    </div>
  )
}

export default Trainers

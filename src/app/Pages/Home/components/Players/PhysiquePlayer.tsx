import React from 'react'
import CenterMode from './component/PlayerCards'
import { Typography } from '@mui/material'
import { COLORS } from '@/constant/color'

const PhysiquePlayer = () => {
  return (
    <div>
       <Typography
       sx={{
        fontSize:{md:100,sm:100,xs:40},
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
        PLAYERS...
       </Typography>
       <CenterMode/>
    </div>
  )
}

export default PhysiquePlayer

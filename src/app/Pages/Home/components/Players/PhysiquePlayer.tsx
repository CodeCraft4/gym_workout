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
        mt:10,
        textAlign:"center",
        fontWeight:900,
        textDecoration:"underline",
        color: COLORS.whiteGrey.blueGray
       }}
       >
        PLAYERS...
       </Typography>
       <CenterMode/>
    </div>
  )
}

export default PhysiquePlayer

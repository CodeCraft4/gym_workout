import { COLORS } from '@/constant/color'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import WeeklyGames from './components/Games/WeeklyGames'

const page = () => {
  return (
    <div>
      <Box
      position={'relative'}
      >
        <Image
         src={"https://as1.ftcdn.net/v2/jpg/05/72/91/08/1000_F_572910874_gjyCeTnHtxFMIuPFcfE0djznBMgsU4Bf.jpg"}
         width={100}
         height={560}
         style={{width:"100%",filter:"brightness(40%)",objectFit:'cover'}} 
         alt="exImg"
         />
         <Typography
         sx={{
            position:"absolute",
            top:"10%",
            textAlign:'center',
            width:"100%",
            fontSize:{md:100},
            fontWeight:900,
            color:COLORS.secondary.pink,
         }}
         >EXERCISE..</Typography>

         <WeeklyGames/>
      </Box>
    </div>
  )
}

export default page

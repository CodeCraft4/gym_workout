import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { ALL_PLAYERS } from '@/constant/content'
import Image from 'next/image'
import TopNav from '../TopBar/TopNav'

const PlayerCard = () => {
  return (
    <div>
       <Container maxWidth="lg" sx={{mt:10}}>
        <TopNav/>
        <Grid container spacing={3}>
            {ALL_PLAYERS.map((items,i)=>(
                <Grid
                key={i}
                item
                md={3}
                sm={4}
                xs={12}
                >
               <Box
               sx={{
                border:"1px solid gray",
                p:3,
                textAlign:"center"
               }}
               >
                <Box
                sx={{display:"flex",justifyContent:"center"}}
                >
                <Image 
                src={items.imgUrl}
                width={200}
                height={200}
                style={{
                    borderRadius:"50%",
                    objectFit:'cover'
                }}
                alt="player"/>
                </Box>
                <Typography
                sx={{
                    fontWeight:'bold'
                }}
                >{items.name}</Typography>
                <Typography>{items.description}</Typography>
               </Box>
                </Grid>
            ))}
        </Grid>
       </Container>
    </div>
  )
}

export default PlayerCard

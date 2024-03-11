import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { ALL_PLAYERS } from '@/constant/content'
import Image from 'next/image'


const PlayersInfo = ({params}:any)=> {
    return (
        <div>
            <Box>
                <Typography
                sx={{
                    fontSize:{md:80},
                    fontWeight:900,
                    textAlign:"center",
                    p:4,
                    mt:15
                }}
                >PLAYER DETAILS</Typography>
                <Container maxWidth="md" sx={{
                    mt:20
                }}>
                    {ALL_PLAYERS.map((player,i)=>(
                       <Box key={i}>
                        {player.id == params.id && (
                                <Grid container spacing={4}>
                                    <Grid item md={6}>
                                        <Image 
                                        src={player.imgUrl}
                                        width={100}
                                        height={800}
                                        style={{
                                            width:"100%",
                                            objectFit:"cover",
                                            filter:"grayScale(50%)"
                                        }}
                                        alt='imgSide'/>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography
                                        sx={{
                                            fontSize:{md:50},
                                            p:4,
                                        }}
                                        >{player.name}</Typography>
                                        <Typography>Comment : {player.description}</Typography>
                                    </Grid>
                                </Grid>
                        )}
                       </Box>
                    ))}
                </Container>
            </Box>
        </div>
    )
}

export default PlayersInfo
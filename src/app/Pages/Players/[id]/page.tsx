import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { ALL_PLAYERS } from '@/constant/content'
import Image from 'next/image'
import { CommentBank, LockClockOutlined, NordicWalking, PermCameraMicOutlined, PhoneAndroid } from '@mui/icons-material'


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
                                <Grid container spacing={2}>
                                    <Grid item md={6}>
                                        <Image 
                                        src={player.imgUrl}
                                        width={100}
                                        height={800}
                                        style={{
                                            width:"100%",
                                            objectFit:"cover",
                                            filter:"grayScale(80%)"
                                        }}
                                        alt='imgSide'/>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography
                                        sx={{
                                            fontSize:{md:40},
                                            p:2,
                                        }}
                                        >{player.name}</Typography>
                                        <Typography sx={{p:1,display:"flex"}}><CommentBank/><b>Comment</b>: {player.description}</Typography>
                                        <Typography sx={{p:1,display:"flex",alignItems:"center"}}><LockClockOutlined/><b>Time</b> :{player.since} Years.</Typography>
                                        <Typography sx={{p:1,display:"flex",alignItems:"center"}}><PhoneAndroid/><b>Phone Number</b> : {player.phoneNumber}</Typography>
                                        <Typography sx={{p:1,display:"flex",alignItems:"center"}}><NordicWalking/><b>Paractice</b> : {player.paractice}</Typography>
                                        <Typography sx={{p:1,display:"flex",alignItems:"center"}}><PermCameraMicOutlined/><b>Version</b> : {player.version}</Typography>
                                        <Grid container spacing={1}>
                                            {ALL_PLAYERS[i].FITNESS_MUSCLE?.map((muscle,i)=>(
                                                <Grid item key={i} md={6}>
                                                    <Image
                                                    src={muscle}
                                                    width={100}
                                                    height={200}
                                                    style={{
                                                        width:"100%",
                                                        objectFit:"cover"
                                                    }}
                                                    alt='img'
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
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
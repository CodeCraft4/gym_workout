import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { WEEKLY_GAMES } from '@/constant/content'
import Image from 'next/image'

const GameInfo = ({params}:any) => {
  return (
    <div>
       <Box>
        <Typography
        sx={{
            textAlign:"center",
            p:20,
            fontSize:{md:80},
            fontWeight:900,
        }}
        >SETS DETAILS...</Typography>
         <Container maxWidth="md">
            {WEEKLY_GAMES.map((item,i)=>(
                <Box key={i}>
                {item?.id == params.id && (
                    <Box>
                    <Image
                    src={item.img}
                    width={100}
                    height={500}
                    style={{
                        width:"100%",
                        objectFit:"cover"
                    }}
                    alt="img"/>
                        <Typography
                        sx={{
                            fontSize:{md:50},
                            p:3,
                            textAlign:"center",
                        }}
                        >{item.name}</Typography>
                        <Typography
                        sx={{
                            pb:8
                        }}
                        >{item.description}</Typography>
                    <Grid container spacing={1}>
                        {WEEKLY_GAMES[i].GAMES_SETS?.map((data,k)=>(
                            <Grid item md={4} key={k}>
                                <Box
                                sx={{
                                    boxShadow:"2px 4px 39px black",
                                    p:1
                                }}
                                >
                                <Image
                                 src={data.setImg}
                                 width={100}
                                 height={200}
                                 alt='set...'
                                 style={{
                                    width:"100%",
                                    objectFit:"cover"
                                 }}
                                />
                                <Typography
                                sx={{
                                    p:1,
                                    fontWeight:"bold"
                                }}
                                >Sets:{data.name}</Typography>
                                <Typography
                                sx={{
                                    p:1,
                                    fontWeight:"bold"
                                }}
                                >{data.times}</Typography>
                                <Typography
                                sx={{
                                    p:1,
                                    fontWeight:"bold"
                                }}
                                >{data.raps} Reps...</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    </Box>
                )}
                </Box>
            ))}
         </Container>
       </Box>
    </div>
  )
}

export default GameInfo

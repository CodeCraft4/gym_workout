"use client"
import React from 'react'
import { Box, Container, Grid, Typography,Pagination, Stack } from '@mui/material'
import { ALL_PLAYERS } from '@/constant/content'
import { COLORS } from '@/constant/color'
import Image from 'next/image'
import Link from 'next/link'
import TopNav from '../TopBar/TopNav'

const PlayerCard = () => {

const currentPage = 8;
  const [user, setUser] = React.useState(1);
  const handleChange = (e: any, data: any) => {
    setUser(data);
  };
  const members = user * currentPage;
  const remainingMembers = members - currentPage;
  

  return (
    <div>
       <Container maxWidth="lg" sx={{mt:10}}>
        <TopNav/>
        <Grid container spacing={3}>
            {ALL_PLAYERS.slice(remainingMembers, members).map((items,i)=>(
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
                 textAlign:"center",
                 color:"black",
                }}
               >
                <Link href={`/Pages/Players/${items.id}`}>
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
                    fontWeight:'bold',
                    fontSize:{md:25},
                    p:2,
                }}
                >{items.name}</Typography>
                <Typography
                sx={{
                  fontStyle:"italic",
                  color:COLORS.grey.grey
                }}
                ><b>Comment :</b>{items.description}</Typography>
               </Link>
               </Box>
                </Grid>
            ))}
        </Grid>
        <Box mt={3}>
                 <Stack spacing={2}>
        <Pagination
          sx={{
            ".MuiPaginationItem-root": {
              border: `1px solid ${COLORS.whiteOrange.orange}`,
              bgcolor: "white",
              "&.Mui-selected": {
                bgcolor: "black",
                color: "white",
                "&:hover": { bgcolor: "rgb(10%, 10%, 40%)", color: "white" },
              },

              "&:hover": { bgcolor: "rgb(254, 141, 241)", color: "white" },
            },
              '& > .MuiPagination-ul': {
                justifyContent: 'center',
              },
          }}
          count={Math.ceil(ALL_PLAYERS?.length / currentPage)}
          page={user}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
      </Box>
       </Container>
    </div>
  )
}

export default PlayerCard

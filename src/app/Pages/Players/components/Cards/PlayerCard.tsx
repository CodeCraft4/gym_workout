"use client"
import React from 'react'
import { Box, Container, Grid, Typography,Pagination, Stack } from '@mui/material'
import { ALL_PLAYERS } from '@/constant/content'
import { COLORS } from '@/constant/color'
import Image from 'next/image'
import Link from 'next/link'
import TopNav from '../TopBar/TopNav'
import styles from "./playerCard.module.css";


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
        <Grid container spacing={2} sx={{mt:20}}>
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
                 textAlign:"center",
                 color:"black",
                 boxShadow:"3px 7px 39px gray",
                 p:2,
                 borderRadius:"50%",
                 width:225,
                }}
               >
                <Link href={`/Pages/Players/${items.id}`}  className={styles.container}>
                <Box
                sx={{display:"flex",justifyContent:"center"}}
                >
                <Image 
                src={items.imgUrl}
                className={styles.image}
                width={200}
                height={200}
                alt="player"/>
                <div className={styles.contents}>
                  <Typography fontSize={"1.3rem"} fontWeight={"bold"} fontStyle={"italic"}>
                    {items?.name} 
                  </Typography>
                </div>
                </Box>
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

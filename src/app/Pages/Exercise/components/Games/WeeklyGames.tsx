import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./Game.module.css";
import Image from "next/image";
import Link from "next/link";
import { WEEKLY_GAMES } from "@/constant/content";

const HappyStories = () => {
  return (
    <Box pb={{ md: 6 }} position={"relative"}>
          <Typography 
          sx={{
            fontSize:{md:80},
            fontWeight:900,
            p:4,
            textAlign:"center",
          }}
          >
            WEEKLY PARACTICE
          </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={1} px={{ md: 2 }}>
          {WEEKLY_GAMES.map((story, i) => (
            <Grid item md={4} sm={6} xs={12} key={i}>
              <Link
                href={`/Pages/Exercise/${story?.id}`}
                className={styles.container}
                style={{
                  display: "flex",
                  marginBottom: "20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  width={340}
                  height={240}
                  className={styles.image}
                  src={story?.img}
                  alt="nature"
                />
                <div className={styles.contents}>
                  <Typography fontSize={"1.3rem"} fontWeight={"bold"} fontStyle={"italic"}>
                    {story.name} 
                  </Typography>
                  <Typography mt={1} >
                    {story?.day}
                  </Typography>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HappyStories;
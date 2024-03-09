import { COLORS } from "@/constant/color";
import { WEEKLY_GAMES } from "@/constant/content";
import { Container, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const WeeklyGames = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          sx={{
            fontSize: { md: 80 },
            fontWeight: 900,
            textAlign: "center",
            p: 4,
          }}
        >
          WEEKLY GAMES
        </Typography>

        <Grid container spacing={3}>
          {WEEKLY_GAMES.map((data) => (
            <Grid item md={6} sm={6} xs={12} key={data.day}>
              <Box
              sx={{
                p:3,
                boxShadow:"0px 3px 128px blue"
              }}
              >
                <Typography
                sx={{
                    fontSize:{md:30},
                    p:2,
                    fontWeight:900,
                    color:COLORS.secondary.pink
                }} 
                >{data.day}</Typography>
                <Image
                  src={data.img}
                  width={100}
                  height={200}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    filter: "brightness(40%)",
                  }}
                  alt="Game"
                />
                <Typography>{data.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WeeklyGames;

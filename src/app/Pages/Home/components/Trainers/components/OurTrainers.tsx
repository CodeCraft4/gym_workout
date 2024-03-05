import CustomizeButton from "@/components/Commons/Button/CustomizeButton";
import { COLORS } from "@/constant/color";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const OurTrainers = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Grid container sx={{ mt:5}} spacing={4}>
          <Grid item md={6} sm={6} xs={12}>
            <Image
              src={
                "https://images.pexels.com/photos/8042015/pexels-photo-8042015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={900}
              height={500}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              alt="trainer"
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Typography
              sx={{
                fontSize: { md: 60,sm:60,xs:30 },
                fontWeight: 900,
                color:COLORS.warning.red
              }}
            >
              OUR TRAINER
            </Typography>
                
            <Typography sx={{fontSize: { md: 17,sm:15,xs:13},color:COLORS.grey.grey}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
              est placeat officiis nihil eveniet ad harum reprehenderit beatae
              quam nulla eos voluptate, aperiam necessitatibus cupiditate amet
              rem laborum ut illum dolor neque saepe aliquam consequatur illo
              odio. Cum, deleniti vitae? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi quia nemo fugit quidem corrupti aliquid
              obcaecati dolores accusamus ullam. Tempore excepturi quia tempora!
              Sunt sit eveniet dicta officiis? Repellat, magni.
            </Typography>
            <CustomizeButton title={"Visit for Descussion!"}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OurTrainers;

import { COLORS } from "@/constant/color";
import { Container, Typography } from "@mui/material";
import React from "react";

const GYMAbout = () => {
  return (
    <React.Fragment>
      <Typography
        sx={{
          fontSize: { md: 100,sm:100,xs:30 },
          textAlign: "center",
          fontWeight: 900,
          textDecoration: "underline",
          color: COLORS.primary.aqua,
          textShadow:{md:"2px 9px 15px black",sm:"2px 9px 15px black",xs:"none"},
          p:5,
          fontFamily:"fantasy",
          letterSpacing:5
        }}
      >
        ABOUT GYM...
      </Typography>
      <Container maxWidth="md"
       sx={{
        color:COLORS.grey.grey,
        wordSpacing:4
      }}>
        <Typography>
       Our Best regards,We are thrilled to welcome you to our dynamic fitness center, where
          wellness meets excellence. At
            <i>BAR SWAT GYM AND FITNESS CENTER</i>
          , our mission is to inspire and empower you on your fitness journey.
          Our state-of-the-art facilities are designed to cater to individuals
          of all fitness levels, providing a supportive environment for your
          health and well-being
        </Typography>
        <Typography>
          Our dedicated team of fitness professionals is committed to helping
          you achieve your goals, whether its gaining strength, improving
          flexibility, or enhancing overall cardiovascular health. From
          cutting-edge equipment to diverse group classes, we offer a
          comprehensive range of options to keep your workouts engaging and
          effective.
          At <b>`BAR SWAT GYM AND FITNESS CENTER`</b>, we believe in fostering a sense of community and
          camaraderie. Join us in creating a space where fitness becomes a
          lifestyle, not just a routine. Your journey to a healthier, happier
          you starts here.
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default GYMAbout;

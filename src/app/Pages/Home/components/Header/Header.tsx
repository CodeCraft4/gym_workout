"use client"
import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { SLIDER_TEXT } from "@/constant/content";
import { COLORS } from "@/constant/color";

function Fade() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay:true,
    TouchEvent:true,
    arrows:false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          SLIDER_TEXT.map((item)=>(
            <Box
            sx={{
              position:"relative"
            }}
            key={item.title}
            >
              <Image
              src={item.imgUrl}
              alt="img"
              width={1349}
              height={650}
              style={{
                objectFit:"cover",
                filter:"brightness(50%)"
              }}
              />
              <Box
              sx={{
                position:"absolute",
                top:"20%",
                width:{md:'50%'}
              }}
              >
                <Typography
                   sx={{
                    fontSize:{md:300},
                    fontWeight:900,
                    color:COLORS.whiteOrange.orange
                   }}
                 >{item.title}</Typography>
              </Box>
            </Box>
          ))
        }
      </Slider>
    </div>
  );
}

export default Fade;


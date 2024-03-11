"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import {Box,Typography,Container} from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PLAYERS_CARD } from "@/constant/content";
import Image from 'next/image'
import { COLORS } from "@/constant/color";
import CustomizeButton from "@/components/Commons/Button/CustomizeButton";




const PremiumMember =()=> {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState("100%");


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    touchMove:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none",
         position:'relative',
        }}
      >
         <Container maxWidth='lg'>
        <Slider {...settings}>
                {PLAYERS_CARD.map((item)=>(
                    <Box key={item.imgUrl}>
                      <Box
                      sx={{
                        boxShadow:`inset 0px 0px 193px 2px ${COLORS.whiteGrey.blueGray}`,
                        m:"5px",
                        borderRadius:"2px 58px",
                        p:1,
                        textAlign:"center"
                      }}
                      
                      >
                      <Box sx={{display:"flex",m:'auto',justifyContent:"center",textAlign:"center"}}>
                      <Image
                       src={item.imgUrl}
                       alt="profileImage"
                        width={200}
                         height={200}
                          style={{borderRadius:"50%",objectFit:"cover"}}
                          />
                      </Box>
                   <Typography sx={{p:1,fontSize:{md:30},fontWeight:900}}>{item.name}</Typography>
                   <Typography sx={{p:1,fontStyle:"italic",color:COLORS.grey.grey}}>{item.description}</Typography>
                   <Typography sx={{p:1}}>{item.since} Years</Typography>
                   <CustomizeButton title={"View Profile"}/>
                    </Box>
                    </Box>
                ))}
        </Slider>
        </Container>
      </div>
    </div>
  );
}

export default PremiumMember;

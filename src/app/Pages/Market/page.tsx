"use client"
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { COLORS } from '@/constant/color'
import ProteinProduct from './components/Products/ProteinProduct'
import { PRODUCT } from '@/constant/content'

const Market = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(PRODUCT);



    useEffect(()=>{
            if (search?.length >= 2) {
                const searchProduct = data.filter((e) =>
                `${e.name.toLocaleLowerCase()}`.includes(search.toLocaleLowerCase())
                );
                setData(searchProduct)
            }
  },[search])
  


  return (
    <div>
           <Box
       position="relative"
       >
        <Image
         src="https://images.pexels.com/photos/3559739/pexels-photo-3559739.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
         alt="img"
         width={100}
         height={650}
         style={{
            objectFit:"cover",
            width:"100%",
            filter:"brightness(50%)"
         }}
         />
         <Box
          sx={{
            position:"absolute",
            top:"40%",
            width:"100%",
            textAlign:"center",
          }}
         >
        <Typography
        sx={{
            fontSize:{md:100,sm:100,xs:50},
            fontWeight:900,
            color:COLORS.whiteOrange.orange
        }}
        >OUR PRODUCTS</Typography>
        <Typography
        sx={{
            color:COLORS.primary.aqua,
            letterSpacing:{md:4,xs:0}
        }} 
        >
            Our gym product is available in Gym.
        </Typography>
        </Box>
       </Box>
        <ProteinProduct search={search} setSearch={setSearch} data={data}/>
    </div>
  )
}

export default Market

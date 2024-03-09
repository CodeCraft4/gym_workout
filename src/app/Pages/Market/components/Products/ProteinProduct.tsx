"use client";
import React, { useEffect, useState } from "react";
// import { PRODUCT } from "@/constant/content";
import { Box, Container, Grid, Modal, TextField, Typography } from "@mui/material";
import Image from "next/image";
import CustomizeButton from "@/components/Commons/Button/CustomizeButton";
import Link from "next/link";

const ProteinProduct = (props:any) => {
    const {data,search,setSearch} = props
  return (
    <div>
      <Container maxWidth="lg" sx={{ position: "relative", mt: 5 }}>
        <Typography
          sx={{
            fontSize: { md: 100, sm: 100, xs: 40 },
            fontWeight: 900,
            textAlign: "center",
            p: 2,
          }}
        >
          PRODUCTS.
        </Typography>
        <TextField
          type="search"
          size="small"
          value={search}
         onChange={({ target }) => setSearch(target.value)}
          placeholder="Search Product.."
          sx={{ m: 2, bgcolor: "white" }}
        />
        <Grid container spacing={4}>
          {data?.map((items,i) => (
            <Grid key={i} item md={4} sm={6} xs={12}>
              <Link href={`/Pages/Market/${items.id}`}>
              <Box
                sx={{
                  border: "1px solid gray",
                  p: 2,
                  textAlign: "center",
                  boxShadow: "inset 0px 0px 2px 3px #212121",
                  borderRadius: 5,
                }}
              >
                <Image
                  src={items.imageUrl}
                  width={200}
                  height={200}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  alt="jpeg"
                />
                <Typography>{items.name}</Typography>
                <Typography>Description:{items.content}</Typography>
                <Typography>Price:{items.price}</Typography>
                <Typography>Rate:{items.rate}</Typography>
                <Typography>Category:{items.categoryId}</Typography>
                <Typography>Review:{items.review}</Typography>
                <CustomizeButton title="Buy" />
              </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProteinProduct;

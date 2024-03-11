"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Grid,Pagination, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/constant/color";


const UserShowOnPage = 3;

const ProteinProduct = (props:any) => {
  const {data,search,setSearch} = props

  const [user, setUser] = React.useState(1);
  const handleChange = (e: any, data: any) => {
    setUser(data);
  };
  const members = user * UserShowOnPage;
  const remainingMembers = members - UserShowOnPage;
  

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
          {data?.slice(remainingMembers, members).map((item:any,i:any) => (
            <Grid key={i} item md={4} sm={6} xs={12}>
              <Link href={`/Pages/Market/${item.id}`}>
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
                  src={item.imageUrl}
                  width={200}
                  height={200}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  alt="jpeg"
                />
                <Typography>{item.name}</Typography>
                <Typography>Description:{item.content}</Typography>
                <Typography>Price:{item.price}</Typography>
                <Typography>Rate:{item.rate}</Typography>
                <Typography>Category:{item.categoryId}</Typography>
                <Typography>Review:{item.review}</Typography>
              </Box>
              </Link>
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
          count={Math.ceil(data?.length / UserShowOnPage)}
          page={user}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
      </Box>
      </Container>
    </div>
  );
};

export default ProteinProduct;

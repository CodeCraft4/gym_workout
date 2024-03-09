import React from "react";
import { PRODUCT } from "@/constant/content";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ProductInfo = ({ params }: any) => {
  return (
    <div>
      <Typography
        sx={{
          p: 15,
          fontSize: { md: 100 },
          fontWeight: 900,
          textAlign: "center",
        }}
      >
        PROUDCT DETAILS
      </Typography>
      <Container maxWidth="md">
        {PRODUCT.map((data, i) => (
          <Box key={i}>
            {data?.id == params.id && (
              <Box
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  boxShadow:"inset 0px 0px 338px 7px pink"
                }}
              >
                <Image
                  src={data.imageUrl}
                  width={100}
                  height={200}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  alt="Img"
                />
                <Typography
                  sx={{
                    p: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores exercitationem vitae debitis blanditiis atque tempore
                  illo, voluptatibus, quaerat assumenda facilis a accusamus fuga
                  vero quis. Earum est illo neque delectus magnam mollitia
                  nihil. A quas excepturi nobis quod voluptatem dicta ea quos,
                  pariatur quis dignissimos vel ipsa velit recusandae
                  voluptatibus corrupti necessitatibus? Ducimus perferendis
                  vitae perspiciatis. Perspiciatis, minima dolore! Optio.
                </Typography>
                <Box textAlign={"start"}>
                <Typography
                  sx={{
                    p: 2,
                    fontSize:{md:20}
                  }}
                >
                  <b>Price:</b>{data.price} PKR
                </Typography>
                <Typography
                  sx={{
                    p: 2,
                    fontSize:{md:20}
                  }}
                >
                  
                  <b>Rating:</b>{data.rate}
                </Typography>
                <Typography
                  sx={{
                    p: 2,
                    fontSize:{md:20}
                  }}
                >
                   <b>Available:</b>{data.review}
                </Typography>
                </Box>
              <Box>
                <Grid container spacing={1}>
                <Typography
                sx={{
                    fontSize:{md:60},
                    fontWeight:900,
                    p:3,
                    textAlign:"center",
                    justifyContent:"center",
                    m:'auto'
                }}
                >RELATED FEATURED</Typography>
                {PRODUCT[i].RELATED_PRODUCT.map((item,i)=>(
                      <Grid item md={3} key={i}>
                        <Box
                        border={'1px solid gray'} 
                        p={2}
                        mt={5}
                        >
                     <Image
                     src={item}
                     width={100}
                     height={250}
                     style={{
                        width:"100%",
                        objectFit:"cover"
                     }}
                     alt="Img"/>
                     </Box>
                      </Grid>
                ))}
                </Grid>
              </Box>
              </Box>
            )}
          </Box>
        ))}
      </Container>
    </div>
  );
};

export async function generateMetadata({ param }: any) {
  // STORIES.map((story, i) => ({
  //   title: `${story?.mPartnerName} & ${story?.fePartnerName}`,
  // }));
}

export default ProductInfo;

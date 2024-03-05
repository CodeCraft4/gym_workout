import React from "react";
import Image from "next/image";
import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";
import Fitness from '../../../../public/asset/logo1.png'

import { COLORS } from "@/constant/color";
import CustomizeButton from "../Button/CustomizeButton";

const Footer = () => {
  return (
    <div>
      <Box sx={{ bgcolor: COLORS.whiteGrey.blueGray,mt:10,color:"white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ pt: 8 }}>
            <Grid item md={3} sm={6} xs={12}>
              <Image
                src={Fitness}
                alt="logo"
                width={200}
                height={100}  
              />
              <Typography sx={{ mt: 2 }}>Email:<u><i>imadshah4104@gmail.com</i></u></Typography>
              <Typography sx={{ mt: 2 }}>Phone: +92 341-2764-104</Typography>
              <Box sx={{ p: 2 }}>
                <FacebookIcon
                  sx={{
                    "&:hover": {
                      color: COLORS.whiteOrange.orange,
                      cursor: "pointer",
                    },
                  }}
                />
                <TwitterIcon
                  sx={{
                    "&:hover": {
                      color: COLORS.whiteOrange.orange,
                      cursor: "pointer",
                    },
                  }}
                />
                <LinkedInIcon
                  sx={{
                    "&:hover": {
                      color: COLORS.whiteOrange.orange,
                      cursor: "pointer",
                    },
                  }}
                />
                <InstagramIcon
                  sx={{
                    "&:hover": {
                      color: COLORS.whiteOrange.orange,
                      cursor: "pointer",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item md={3} mt={3} sm={6} xs={12}>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                USEFUL VISIT
              </Typography>
              <List>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none",color:COLORS.whiteOrange.orange}}
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none",color:COLORS.whiteOrange.orange}}
                  >
                    About
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none",color:COLORS.whiteOrange.orange}}
                  >
                    Exercise
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none",color:COLORS.whiteOrange.orange}}
                  >
                    2nd Branch
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} mt={3} sm={6} xs={12}>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                QUICK SEARCH
              </Typography>
              <List>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none",color:COLORS.whiteOrange.orange}}
                  >
                    Exercise
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none",color:COLORS.whiteOrange.orange}}
                  >
                    About trainer
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none",color:COLORS.whiteOrange.orange}}
                  >
                    Rules & Regulation
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none",color:COLORS.whiteOrange.orange}}
                  >
                    Ask Trainer
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} mt={3} sm={6} xs={12}>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                Visit 2nd Branch
              </Typography>
              <Typography sx={{ mt: 2 }}>
                 In second branch is in Kalakoot,Swat,Pakistan.
              </Typography>
               <Typography> 
                To Visit the 2nd Branch!.
               <CustomizeButton title="2nd Branch"/>
               </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;


const linkStyle={
  color:COLORS.primary.aqua
}
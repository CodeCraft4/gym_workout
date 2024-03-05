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

const Footer = () => {
  return (
    <div>
      <Box sx={{ bgcolor: "#bdbdbd",mt:10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ pt: 8 }}>
            <Grid item md={3} sm={6} xs={12}>
              <Image
                src={Fitness}
                alt="logo"
                width={200}
                height={100}  
              />
              <Typography sx={{ mt: 2 }}>Email:info@metrimony.com</Typography>
              <Typography sx={{ mt: 2 }}>Phone: +1 800 123 456 789</Typography>
              <Box sx={{ p: 2 }}>
                <FacebookIcon
                  fontSize="large"
                  sx={{
                    "&:hover": {
                      color: COLORS.whiteOrange.orange,
                      cursor: "pointer",
                    },
                  }}
                />
                <TwitterIcon
                  fontSize="large"
                  sx={{
                    "&:hover": {
                      color: COLORS.whiteOrange.orange,
                      cursor: "pointer",
                    },
                  }}
                />
                <LinkedInIcon
                  fontSize="large"
                  sx={{
                    "&:hover": {
                      color: COLORS.whiteOrange.orange,
                      cursor: "pointer",
                    },
                  }}
                />
                <InstagramIcon
                  fontSize="large"
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
                USEFUL LINKS
              </Typography>
              <List>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none" }}
                  >
                    About
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none" }}
                  >
                    Peckage
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none" }}
                  >
                    Blog
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
                    style={{ fontSize: 15, textDecoration: "none" }}
                  >
                    Faq
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none" }}
                  >
                    Contact
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none" }}
                  >
                    Term & Condition
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    style={{ fontSize: 15, textDecoration: "none" }}
                  >
                    Privacy Policy
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} mt={3} sm={6} xs={12}>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                SUBSCRIPTION
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Stay in the loop! Subscribe to our newsletter for exclusive
                update,tips and promotions.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  mt: 3,
                  mb:4,
                }}
              >
                <TextField
                  type="email"
                  size="small"
                  fullWidth
                  placeholder="Enter email"
                  sx={{ border: "none", borderRadius: 0 }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "black",
                    p: 1,
                    borderRadius: 0,
                    m: -2,
                    "&:hover": { bgcolor: "black" },
                  }}
                >
                  <TelegramIcon sx={{ color: "white" }} />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;

"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBagOutlined,
} from "@mui/icons-material";
import Fitness from '../../../../public/asset/logo1.png'
import { COLORS } from "@/constant/color";
import DarkBtn from "../Button/Dark&Light";


const drawerWidth = 200;
export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [bgColor, setBgColor] = React.useState(false);
  const changeBgColor = () => {
    if (window.scrollY >= 10) {
      setBgColor(true);
    } else setBgColor(false);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBgColor);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
       <Image
                src={Fitness}
                width={120}
                height={80}
                alt="logoImg"
              />
      <Divider />
      <List>
        <ListItem>
          <Link
            href={"/Pages/Home"}
            style={{ color: "black", textDecoration: "none" }}
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={"/Pages/About"}
            style={{ color: "black", textDecoration: "none" }}
          >
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={"/"}
            style={{ color: "black", textDecoration: "none" }}
          >
            Exercise
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={"/"}
            style={{ color: "black", textDecoration: "none" }}
          >
            Players
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={"/"}
            style={{ color: "black", textDecoration: "none" }}
          >
            2nd Branch
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ bgcolor: bgColor ? COLORS.whiteOrange.orange : "rgba(5%,20%,9%,.3)", width: "100%"}}
        elevation={0}
      >
        <Toolbar sx={{ width: "100%" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box>
              <Image
                src={Fitness}
                width={120}
                height={80}
                alt="logoImg"
              />
            </Box>
            <List sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
              <ListItem>
                <Link
                  href={"/Pages/Home"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  HOME
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/Pages/About"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  ABOUT
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  EXERCISE
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  PLAYERS
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  MARKET
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={"/"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  2ndBranch
                </Link>
              </ListItem>
            </List>
            <Box
            sx={{display:'flex',alignItems:"center"}} 
            >
            <DarkBtn/>
            <ShoppingBagOutlined fontSize="large"/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
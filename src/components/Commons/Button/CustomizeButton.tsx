import React from 'react'
import { Box, Button } from '@mui/material'
import { COLORS } from '@/constant/color'

const CustomizeButton = (props:any) => {
    const {title} = props
  return (
    <div>
        <Box sx={boxStyle}>
         <Button sx={btnStyle}>{title}</Button>
        </Box>
    </div>
  )
}

export default CustomizeButton

const boxStyle = {
  border: `1px solid ${COLORS.whiteGrey.blueGray}`,
  margin: "auto",
  textAlign: "center",
  marginTop:'5px',
  borderRadius: "5px",
  padding: 0.4,
  position: "relative",
  transition: ".3s",
  width:"50%",
  "&:hover": {
    border: `1px solid ${COLORS.primary.aqua}`,
  },
};

const btnStyle = {
  backgroundColor: COLORS.secondary.pink,
  color:"white",
  width: "100%",
  padding: "5px",
  transition: ".3s",
  "&:hover": {
    backgroundColor:COLORS.whiteGrey.blueGray,
  },
};

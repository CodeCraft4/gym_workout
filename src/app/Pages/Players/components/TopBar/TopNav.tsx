import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { COLORS } from '@/constant/color'

const TopNav = () => {
  return (
    <div>
        <Box
        sx={{
            display:"flex",
            justifyContent:"space-between",
            p:2,
            alignItems:"center"
        }}
        >
         <b>Search Student.</b>
         <Box
         sx={{
          border:'1px solid gray',
          borderRadius:'5px',
          display:"flex",
          alignItems:"center"
         }}
         >
         <TextField 
         type="search"
          size='small'
           placeholder="Search Student/ID"
            fullWidth
            />
            </Box>
        </Box>
    </div>
  )
}

export default TopNav

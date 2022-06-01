import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function Header({ handleCart, orderLength }) {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h4' component='span' sx={{ flexGrow: 1 }}>
          Shop MUI
        </Typography>
        <IconButton color='inherit' onClick={handleCart}>
          <Badge color='secondary' badgeContent={orderLength}>
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

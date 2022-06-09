import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar, Badge, Box, Button, IconButton, Toolbar, Typography,
} from '@mui/material';
import React from 'react';
import { useShoppingCart } from '../context/shoppingCartContext';
import { useUser } from '../context/userContext';

function Header() {
  const { shoppingCart } = useShoppingCart();
  const { user } = useUser()
  const isLoggedIn = user.email !== ''

  const itemQuantity = shoppingCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Music Store
        </Typography>
        <Box mr={2}>

          {!isLoggedIn ?
            <Button variant="contained" color="primary">Sign In</Button>
            :
            <div>Hi {user.firstName}</div>
          }

        </Box>
        <IconButton
          size="large"
          aria-label="Go to shopping cart"
          color="inherit"
        >
          <Badge badgeContent={itemQuantity} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

import { ShoppingCart } from "@mui/icons-material";
import { Typography } from "@mui/material"
import BasketItem from "./BasketItem";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

function Basket(props) {
  const {
    cartOpen,
    closeCart = Function.prototype,
    order = [],
    removeFromOrder,
  } = props;

  return (
    <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary='Корзина' />
        </ListItem>
        <Divider />

        {!order.length ? (
          <ListItem>Корзина пуста </ListItem>
        ) : (
            <>
          {order.map((item) => (
            <BasketItem
              key={item.name}
              removeFromOrder={removeFromOrder}
              {...item}
            />
          ))}
          <Divider/>
            <ListItem>
                <Typography sx={{fontWeight: 700}}>
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)}{' '}
                грн.
                </Typography>
            </ListItem>

          </>
        )}
      </List>
    </Drawer>
  );
}

export default Basket;

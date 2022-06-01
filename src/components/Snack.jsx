import { Snackbar, Alert } from "@mui/material";
import React from "react";

export default function Snack({isOpen, handleClose=Function.prototype} ) {
  return (
    <Snackbar open={isOpen}  onClose={handleClose} autoHideDuration={3000}>
    <Alert severity="success" sx={{ width: '100%' }}>
      Товар добавлен в корзину!
    </Alert>
  </Snackbar>
  );
}

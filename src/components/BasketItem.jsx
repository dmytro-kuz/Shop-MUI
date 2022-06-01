import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BasketItem = ({removeFromOrder, id, price, name, quantity}) => {
    return (
        <ListItem>
            <Typography variant='body1'>
            {name} {price}грн x{quantity}
            </Typography>
            
            <IconButton
                className='btn btn-primary'
                onClick={() => removeFromOrder(id)}
            >
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;
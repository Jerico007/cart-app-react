import React, { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../Redux/Action/cartActions";

const CartFooter = () => {

    //dispatch
    const dispatch = useDispatch();

   //Store data
    const {data} = useSelector(state => state);
    
    //useState to show Total amount
    const [amount,setAmount] = useState(0);

    //To update amount on any action performed
    useEffect(()=>{
        let total = 0;
        data.forEach((val)=>{
            total = total +  (val.price * val.amount);
        });
        setAmount(total);
    },[data]);

    //Function for clear cart button
    function cartClear(){
        dispatch(clearCart());
    }

  return (
    <div className="CartFooter">
      <Container maxWidth="xl"  >
      <LinearProgress variant="determinate" value={100} />
        <Box sx={{p:2 ,display:"flex", justifyContent:"space-between" , alignItems:"center"} }>
            <Typography variant="h4">Total</Typography>
            <Badge color="primary"   badgeContent={amount.toFixed(2)} max={Number.MAX_VALUE}></Badge>
        </Box>
        <Box sx={{display:"flex" , justifyContent:"center" , p : 3}}>
          {
            data.length > 0 ? <Button onClick={cartClear} sx={{alignSelf:"center"}} variant="contained">CLEAR CART</Button> : ""
          }
        </Box>
      </Container>
    </div>
  );
};

export default CartFooter;

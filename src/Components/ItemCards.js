import React from "react";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { inCreament,deCreament,remove_Item } from "../Redux/Action/cartActions";
import { useDispatch } from "react-redux";
const ItemCards = ({ data }) => {
  //Image styling
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    width: "100px",
    height: "100px",
  });

  //dispatch 
  const dispatch = useDispatch();
  
 //function to Increament Product amount
 function Increament(e){
   dispatch(inCreament(e.target.id));
 }

 //function to Decreament Product amount
 function Decreament(e){
  dispatch(deCreament(e.target.id));
 }

 //Function to Remove item from cart
 function removeItem(e){
  dispatch(remove_Item(e.target.id));
 }

  return (
    <div className="ItemCards">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          margin: "auto",
          maxWidth: "100%",
          flexGrow: 1,
          gap: "4.5vh",
        }}
      >
        {data.map((val) => (
          <Grid container spacing={2} key={val.id}>
            <Grid item>
              <Img alt={val.title} src={val.img} />
            </Grid>
            <Grid item xs={11} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    $: {val.price}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                  id={val.id}
                    variant="contained"
                    sx={{ backgroundColor: "#00b9c3" }}
                    onClick={removeItem}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <KeyboardArrowUpIcon id={val.id} onClick={Increament} sx={{ cursor: "pointer" }} />
                <Typography variant="subtitle1" component="div">
                  {val.amount}
                </Typography>
                <KeyboardArrowDownIcon id={val.id} onClick={Decreament} sx={{ cursor: "pointer" }} />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
};

export default ItemCards;

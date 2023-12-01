import React from "react";
import ItemCards from "./ItemCards";
import CartFooter from "./CartFooter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_data } from "../Redux/Action/cartActions";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const CartItems = () => {


  //dispatch methode
  const dispatch = useDispatch();

  //useSelector methode
  const { data, fetching, error } = useSelector((state) => state);



  //Fetching data for the first time
  useEffect(() => {
    dispatch(fetch_data());
  }, []);

  return (
    <div className="CartItems">
      {data.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            paddingTop: "1vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Your Cart
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            paddingTop: "1vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Your Cart is Empty
          </Typography>
        </Box>
      )}

      {fetching ? (
        <Box
          sx={{
            display: "flex",
            paddingTop: "1vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        ""
      )}
      {error ? (
        <Box
          sx={{
            display: "flex",
            paddingTop: "1vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" gutterBottom>
            {error}
          </Typography>
        </Box>
      ) : (
        ""
      )}
      {
        data && <ItemCards data={data}/>

      }
      <CartFooter/>
    </div>
  );
};

export default CartItems;

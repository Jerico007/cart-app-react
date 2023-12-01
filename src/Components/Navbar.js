import React, { useEffect ,useState} from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
  //StyledBadge
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -5,
      top: 1,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      
    },
  }));
  
  //store data 
  const {data} = useSelector(state => state);
  
  //useState to store the products total count
  const [proCounts,setCount] = useState(0);

   // To update badge
  useEffect(()=>{
    let total = 0;
    data.forEach((val)=>total+=val.amount);
    setCount(total);
  },[data])


  return (
    <div className="Navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:"#00b9c3"}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CART APP
            </Typography>
              <StyledBadge badgeContent={proCounts} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;

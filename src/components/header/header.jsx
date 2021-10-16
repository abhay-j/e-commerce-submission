import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Toolbar, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../../contexts/StateProvider";
import useStyles from "./styles";
function Header() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5">WebStore</Typography>
        <Box display="flex">
          <Link
            className={classes.anchor}
            to="/"
            style={{ marginRight: "10px" }}
          >
            <Typography variant="h6">Home</Typography>
          </Link>
          {currentUser ? null : (
            <Link
              className={classes.anchor}
              to="/signup"
              style={{ marginRight: "10px" }}
            >
              <Typography variant="h6">SignUp</Typography>
            </Link>
          )}
          <Link to="/checkout" className={classes.anchor}>
            <ShoppingCartIcon />
          </Link>

          <span>{basket?.length}</span>
          {/* <Link className={classes.anchor} to="/signup">
          <Typography variant="h6">SignUp</Typography>
        </Link> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

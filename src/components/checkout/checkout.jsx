import React, { useState } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Alert from "@material-ui/lab/Alert";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import CheckoutProduct from "../checkoutProduct/checkoutProduct";
import { useStateValue } from "../../contexts/StateProvider";
import Subtotal from "../subtotal/subtotal";
const useStyles = makeStyles({
  root: {
    height: "100vh",
    padding: "20px",
    display: "flex",
    // backgroundColor: "pink",
  },
  checkoutLeft: {},
  checkoutRight: {},
});
const Checkout = () => {
  const classes = useStyles();
  const [{ basket }] = useStateValue();
  const history = useHistory();
  const { logOut } = useAuth();
  const [error, setError] = useState("");
  const handleLogout = async () => {
    setError("");
    try {
      await logOut();
      history.push("/login");
    } catch {
      setError("could not log out");
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.checkoutLeft}>
        <Typography variant="h4">Basket</Typography>
        {error ? <Alert severity="warning">{error}</Alert> : null}
        {basket?.length === 0 ? (
          <Typography variant="h6" component="div">
            The basket is empty
          </Typography>
        ) : (
          <Box display="flex" flexDirection="column">
            {basket?.map((item) => (
              <CheckoutProduct key={item.id} item={item} />
            ))}
          </Box>
        )}
        <Button variant="oulined" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      {basket?.length > 0 && (
        <div className={classes.checkoutRight}>
          {" "}
          <Subtotal />{" "}
        </div>
      )}
    </div>
  );
};

export default Checkout;

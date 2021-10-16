import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { useStateValue } from "../../contexts/StateProvider";
const useStyles = makeStyles({
  checkoutProduct: {
    display: "flex",
    margin: "20px",
  },
  checkoutProductImage: {
    objectFit: "contain",
    height: "180px",
    width: "180px",
  },
  checkoutProductInfo: {
    padding: "20px",
  },
  checkoutProductTitle: {
    fontWeight: "800",
  },
  checkoutProductPrice: {
    marginBottom: "10px",
  },
});
function CheckoutProduct({ item }) {
  const classes = useStyles();
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //... remove from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item.id,
    });
  };
  return (
    <div className={classes.checkoutProduct}>
      <img
        className={classes.checkoutProductImage}
        src={item.image}
        alt={item.title}
      />
      <div className={classes.checkoutProductInfo}>
        <Typography
          variant="subtitle1"
          className={classes.checkoutProductTitle}
        >
          {item.title}
        </Typography>
        <Typography
          variant="subtitle2"
          className={classes.checkoutProductPrice}
        >
          <small>$</small>
          <strong>{item.price}</strong>
        </Typography>
        <Button variant="contained" disableElevation onClick={removeFromBasket}>
          Remove from basket
        </Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

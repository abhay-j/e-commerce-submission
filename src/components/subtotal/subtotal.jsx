import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../contexts/StateProvider";
import { getBasketTotal } from "../../reducer";

const useStyles = makeStyles({
  subtotal: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "100px",
    padding: "20px",
    justifyContent: "space-around",
    backgroundColor: "#f3f3f3",
  },
});
const Subtotal = () => {
  const classes = useStyles();
  const [{ basket }] = useStateValue();
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal {basket?.length} items <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
        displayType={"text"}
      />
      <Button variant="outlined" color="primary">
        Proceed to checkout
      </Button>
    </div>
  );
};

export default Subtotal;

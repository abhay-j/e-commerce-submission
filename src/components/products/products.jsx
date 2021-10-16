import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import Item from "../item/item";
const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
  },
  gridItem: {
    padding: theme.spacing(2),
  },
}));
function Products(props) {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${props.match.params.id}`
      );
      const data = await response.json();

      setItems(data);
      setLoading(false);
    }
    fetchData();
  }, [props.match.params.id]);

  return (
    <div>
      <Typography variant="h4"> {props.match.params.id}</Typography>
      {loading ? (
        <LinearProgress />
      ) : (
        <Grid container className={classes.grid} spacing={2}>
          {items.map((item) => {
            return (
              <Grid
                className={classes.gridItem}
                xs={12}
                md={6}
                lg={4}
                item
                key={item.id}
              >
                <Item item={item} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}

export default withRouter(Products);

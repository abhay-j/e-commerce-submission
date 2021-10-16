import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Box, Button, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    padding: "20px",
  },
  image: {
    objectFit: "contain",
    height: "360px",
    width: "360px",
  },
});
function Details(props) {
  const history = useHistory();
  const [product, setProduct] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${props.match.params.id}`
      );
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, [props.match.params.id]);
  //   console.log(props);
  const arrStr = props.match.url.split("/");
  console.log(`/${arrStr[1]}/${arrStr[2]}`);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {!product ? (
        <LinearProgress />
      ) : (
        <>
          <div classesName={classes.left}>
            <img
              src={product?.image}
              alt={product?.title}
              className={classes.image}
            />
          </div>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{ height: 400 }}
          >
            <Typography variant="title">{product.title}</Typography>
            <Typography variant="subtitle1">${product.price}</Typography>
            <Typography variant="body1">{product.description}</Typography>{" "}
            <Button
              style={{
                width: 100,
                marginTop: 25,
              }}
              onClick={() => {
                history.push(`/${arrStr[1]}/${arrStr[2]}`);
              }}
              variant="outlined"
            >
              Go back
            </Button>
          </Box>
        </>
      )}
    </div>
  );
}

export default withRouter(Details);

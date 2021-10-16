import { LinearProgress, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
  },
});
function Home() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();

      setCategories(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      {loading ? (
        <LinearProgress />
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {categories.map((item, index) => {
            return (
              <Link className={classes.link} to={`shop/${item}`} key={index}>
                <Typography variant="h4" className={classes.category}>
                  {item} shop now
                </Typography>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;

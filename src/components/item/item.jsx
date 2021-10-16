import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useAuth } from "../../contexts/AuthContext";
import { useStateValue } from "../../contexts/StateProvider";
import { useHistory } from "react-router-dom";

function Item({ item }) {
  const history = useHistory();
  const [, dispatch] = useStateValue();
  const { currentUser } = useAuth();
  const addToBasket = () => {
    if (currentUser) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: item,
      });
    } else {
      history.push("/login");
    }
  };
  return (
    <Card>
      <CardMedia
        style={{ height: 350 }}
        component="img"
        image={item.image}
        alt={item.category}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {item.price}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button onClick={addToBasket} size="small">
          Add to cart
        </Button>
        <Link to={`/shop/${item.category}/${item.id}`}>View Details</Link>
      </CardActions>
    </Card>
  );
}

export default Item;

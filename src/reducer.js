export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => item.price + amount, 0);
};
const reducer = (state, action) => {
  console.log("action : ", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic to add item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // logic to remove item from the basket
      const newBasket = [...state.basket].filter(
        (item) => item.id !== action.id
      );
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};
export default reducer;

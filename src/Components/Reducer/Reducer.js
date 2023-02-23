export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
//   console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
          };
    default:
      return state;
  }
};

export default reducer;







































// const reducer = (state, action) => {
//   if (action.type === "INCREASE") {
//     return { ...state, amount: state.amount + 1 };
//   }
//   if (action.type === "ADD_TO_CART") {
//     const newItem = state.products.find((product) => {
//       return product.product_id === action.payload;
//     });
//     let sum = 0;
//     const newTotal = state.cart.map((singleCart) => {
//       sum += Number(singleCart.product_price);
//     });
//     return {
//       ...state,
//       amount: state.amount + 1,
//       cart: [...state.cart, newItem],
//       total: sum + newItem.product_price,
//     };
//   }
//   if (action.type === "REMOVE") {
//     const newCart = state.cart.filter((cartItem) => {
//       return cartItem.product_id !== action.id;
//     });

//     const removedItem = state.cart.find((cartItem) => {
//       return cartItem.product_id === action.id;
//     });
//     return {
//       ...state,
//       cart: newCart,
//       amount: state.amount - 1,
//       total: state.total - removedItem.product_price,
//     };
//   }
//   if (action.type === "LOGIN") {
//     return { ...state, user: action.loginUser };
//   }
//   if (action.type === "LOGOUT") {
//     return { ...state, user: null };
//   }
//   if (action.type === "SET_USER") {
//     return { ...state, user: action.payload };
//   }
// };

// export default reducer;

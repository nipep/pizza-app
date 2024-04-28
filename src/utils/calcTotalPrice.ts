import { cartItemsState } from "../redux/slices/cart/types";

export const calcTotalPrice = (items: cartItemsState[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

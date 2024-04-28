import { count } from "console";
import { cartItemsState } from "../redux/slices/cart/types";

export const calcTotalCount = (items: cartItemsState[]) => {
  return items.reduce((sum, obj) => {
    return sum + obj.count;
  }, 0);
};

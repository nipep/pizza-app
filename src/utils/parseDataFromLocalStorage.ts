import { calcTotalCount } from "./calcTotalCount";
import { calcTotalPrice } from "./calcTotalPrice";

export const localData = () => {
  const getData = localStorage.getItem('cart');
  const items = getData ? JSON.parse(getData) : [];
  const totalPrice = calcTotalPrice(items);
  const totalCount = calcTotalCount(items);

  return {
    items,
    totalPrice,
    totalCount
  };
};

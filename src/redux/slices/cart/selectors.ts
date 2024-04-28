import { RootState } from "../../store";

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
  
export const selectCart = (state: RootState) => state.cart;

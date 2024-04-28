export type cartItemsState = {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    type: string;
    count: number;
    size: number;
  };
  
  export interface cartSliceState {
    totalPrice: number;
    items: cartItemsState[];
    totalCount: number;
  }
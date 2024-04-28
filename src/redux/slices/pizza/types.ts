export enum Status {
  LOADING = "loading",
  SUCCESS = "successss",
  ERROR = "error",
}

export type item = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
};

export type paramsArgs = {
  categories: string;
  order: string;
  orderby: string;
  search: string;
  pageCurrent: number;
};

export interface pizzaSliceState {
  items: item[];
  status: Status;
}

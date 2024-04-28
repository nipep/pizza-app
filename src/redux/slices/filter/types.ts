export type sortTypes = {
  sortName: string;
  sortProperty: "rating" | "price" | "name" | "-rating" | "-price" | "-name";
};

export interface filterSliceState {
  searchValue: string;
  categoriesId: number;
  sortType: sortTypes;
  pageCurrent: number;
}

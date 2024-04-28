import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { filterSliceState, sortTypes } from "./types";

const initialState: filterSliceState = {
  searchValue: "",
  categoriesId: 0,
  sortType: {
    sortName: "популярности (по убыванию)",
    sortProperty: "rating",
  },
  pageCurrent: 1,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoriesId(state, action: PayloadAction<number>) {
      state.categoriesId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType(state, action: PayloadAction<sortTypes>) {
      state.sortType = action.payload;
    },
    setPageCurrent(state, action: PayloadAction<number>) {
      state.pageCurrent = action.payload;
    },
  },
});

export const { setCategoriesId, setSortType, setPageCurrent, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;

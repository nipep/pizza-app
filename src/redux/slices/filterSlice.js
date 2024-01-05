import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sortType: {
    sortName: "популярности (по убыванию)",
    sortProperty: "rating",
  },
  pageCurrent: 1
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoriesId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setPageCurrent(state, action) {
      state.pageCurrent = action.payload
    }
  },
});

export const { setCategoriesId, setSortType, setPageCurrent} = filterSlice.actions;

export default filterSlice.reducer;

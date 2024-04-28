import { createAsyncThunk } from "@reduxjs/toolkit";
import { item, paramsArgs } from "./types";
import axios from "axios";

export const fetchPizza = createAsyncThunk<item[], paramsArgs>(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { categories, order, orderby, search, pageCurrent } = params;
    const { data } = await axios.get<item[]>(
      `https://6567613464fcff8d73104801.mockapi.io/items?page=${pageCurrent}&limit=4&${categories}${search}&orderby=${orderby}&order=${order}`
    );
    return data;
  }
);

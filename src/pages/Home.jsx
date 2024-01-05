import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import {
  setCategoriesId,
  setSortType,
  setPageCurrent,
} from "../redux/slices/filterSlice.js";
import Categories from "../component/Categories/Categories.jsx";
import Sort from "../component/Sort/Sort.jsx";
import Skeleton from "../component/Pizza-block/Skeleton.jsx";
import PizzaBlock from "../component/Pizza-block/Pizza-block.jsx";
import Pagination from "../component/Pagination/Pagination.jsx";
import { SearchContext } from "../App.js";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoriesId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sortType);
  const pageCurrent = useSelector((state) => state.filter.pageCurrent);

  const OnChangeCategories = (id) => {
    dispatch(setCategoriesId(id));
  };

  const OnChangeSort = (obj) => {
    dispatch(setSortType(obj));
  };

  const OnChangePage = (number) => {
    dispatch(setPageCurrent(number));
  };

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);

    const categories = categoriesId > 0 ? `category=${categoriesId}` : ``;
    const orderby = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-", "") ? `asc` : `desc`;
    const search = searchValue ? `&search=${searchValue}` : ``;

    axios
      .get(
        `https://6567613464fcff8d73104801.mockapi.io/items?page=${pageCurrent}&limit=4&${categories}${search}&orderby=${orderby}&order=${order}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [categoriesId, sortType, searchValue, pageCurrent]);

  useEffect(() => {
    const urlString = qs.stringify({
      pageCurrent,
      categoriesId,
      sortType: sortType.sortProperty,
    });
    navigate(`?${urlString}`);
  }, [categoriesId, sortType, pageCurrent]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoriesId}
          OnChangeCategories={OnChangeCategories}
        />
        <Sort value={sortType} OnChangeSort={OnChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination pageCurrent={pageCurrent} onChangePage={OnChangePage} />
    </div>
  );
};
export default Home;

import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import {
  setCategoriesId,
  setSortType,
  setPageCurrent,
} from "../redux/slices/filter/slice.ts";
import { selectSort } from "../redux/slices/filter/selectors.ts";
import Categories from "../component/Categories/Categories.tsx";
import Sort from "../component/Sort/Sort.tsx";
import Skeleton from "../component/Pizza-block/Skeleton.tsx";
import PizzaBlock from "../component/Pizza-block/Pizza-block.tsx";
import Pagination from "../component/Pagination/Pagination.tsx";
import cartEmptyImg from "../assets/img/empty-cart.png";
import { useAppDispatch } from "../redux/store.ts";
import { selectPizza } from "../redux/slices/pizza/selectors.ts";
import { fetchPizza } from "../redux/slices/pizza/sliceAction.ts";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectPizza);
  const { sortType, pageCurrent, categoriesId, searchValue } =
    useSelector(selectSort);

  const OnChangeCategories = useCallback((id: number) => {
    dispatch(setCategoriesId(id));
  }, []);

  const OnChangeSort = (obj: any) => {
    dispatch(setSortType(obj));
  };

  const OnChangePage = (page: number) => {
    dispatch(setPageCurrent(page));
  };

  useEffect(() => {
    const getPizzas = async () => {
      const categories = categoriesId > 0 ? `category=${categoriesId}` : ``;
      const orderby = sortType.sortProperty.replace("-", "");
      const order = sortType.sortProperty.includes("-") ? `asc` : `desc`;
      const search = searchValue ? `&search=${searchValue}` : ``;

      dispatch(
        fetchPizza({
          categories,
          order,
          orderby,
          search,
          pageCurrent,
        })
      );
    };
    getPizzas();
  }, [categoriesId, sortType, searchValue, pageCurrent]);

  useEffect(() => {
    const urlString = qs.stringify({
      pageCurrent,
      categoriesId,
      sortType: sortType.sortProperty,
    });
    navigate(`?${urlString}`);
  }, [categoriesId, sortType, pageCurrent]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoriesId}
          OnChangeCategories={OnChangeCategories}
        />
        <Sort
          sortName={sortType.sortName}
          sortProperty={sortType.sortProperty}
          OnChangeSort={OnChangeSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>
            Произошла ошибка!<span>😕</span>
          </h2>
          <p>
            К сожалению, не удалось получить пиццы(
            <br />
            Попробуйте повторить попытку позже!
          </p>
          <img src={cartEmptyImg} alt="Empty cart" />
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination pageCurrent={pageCurrent} onChangePage={OnChangePage} />
    </div>
  );
};
export default Home;

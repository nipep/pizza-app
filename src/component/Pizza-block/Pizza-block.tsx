import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cart/slice";
import { selectCartItemById } from "../../redux/slices/cart/selectors";
import { cartItemsState } from "../../redux/slices/cart/types";

import { Link } from "react-router-dom";
type PizzaBlockProps = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
}) => {
  const dispatch = useDispatch();
  const countItem = useSelector(selectCartItemById(id));
  const pizzasTypes = ["Тонкое", "Традиционное"];
  const [sizeOption, setSizeOption] = useState(0);
  const [typeOption, setTypeOption] = useState(0);
  const addCount = countItem ? countItem.count : 0;
  const onAddPizza = () => {
    const item: cartItemsState = {
      id,
      imageUrl,
      name,
      price,
      size: sizes[sizeOption],
      type: pizzasTypes[typeOption],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block__wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`} key={id}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{name}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type: number, i: number) => (
              <li
                key={i}
                onClick={() => setTypeOption(i)}
                className={typeOption === i ? "active" : ""}
              >
                {pizzasTypes[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size: number, i: number) => (
              <li
                key={i}
                onClick={() => setSizeOption(i)}
                className={
                  sizeOption === i || String(size).length === 1 ? "active" : ""
                }
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button
            onClick={onAddPizza}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addCount > 0 && <i>{addCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PizzaBlock;

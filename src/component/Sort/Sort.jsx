import { useEffect, useRef, useState } from "react";

export const sortArr = [
  { sortName: "популярности (по возрастанию)", sortProperty: "-rating" },
  { sortName: "популярности (по убыванию)", sortProperty: "rating" },
  { sortName: "цене (по возрастанию)", sortProperty: "-price" },
  { sortName: "цене (по убыванию)", sortProperty: "price" },
  { sortName: "алфавиту (по возрастанию)", sortProperty: "-name" },
  { sortName: "алфавиту (по убыванию)", sortProperty: "name" },
];

const Sort = ({ value, OnChangeSort }) => {
  const [open, setOpen] = useState(false);
  const sortRef = useRef();
  const onClickSort = (i) => {
    OnChangeSort(i);
    setOpen(false);
  };

  useEffect(() => {
    const handlerClickOutside = (e) => {
      if (!e.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handlerClickOutside);

    return () => document.body.removeEventListener("click", handlerClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{value.sortName}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortArr.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickSort(obj)}
                className={value.sortName === obj.sortName ? "active" : ""}
              >
                {obj.sortName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

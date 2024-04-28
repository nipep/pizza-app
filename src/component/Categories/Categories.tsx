import { memo } from "react";

type CategoriesProps = {
  value: number;
  OnChangeCategories: (i: number) => void;
};

const сategories = [
  "Все",
  "Мясные",
  "Вегетаринские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = memo(({
  value,
  OnChangeCategories,
}) => {

  return (
    <div className="categories">
      <ul>
        {сategories.map((CategoriesId, i) => (
          <li
            key={i}
            className={value === i ? "active" : ""}
            onClick={() => OnChangeCategories(i)}
          >
            {CategoriesId}
          </li>
        ))}
      </ul>
    </div>
  );
})
export default Categories;

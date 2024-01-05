const Categories = ({value, OnChangeCategories}) => {
  const сategories = [
    "Все",
    "Мясные",
    "Вегетаринские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

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
};
export default Categories;

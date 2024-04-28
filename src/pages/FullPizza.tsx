import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchpizza() {
      try {
        const { data } = await axios.get(
          `https://6567613464fcff8d73104801.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert("Произошла ошибка при получении пиццы(");
        navigate("/");
      }
    }
    fetchpizza();
  }, []);

  if (!pizza) {
    return "Загрузка";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizzaFull" />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;

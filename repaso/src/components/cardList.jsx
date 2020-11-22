import { Link } from "react-router-dom";

const CardList = ({ cardList }) => {
  return (
    <>
      <ul>
        {cardList.map((item) => {
          return (
            <li>
              <p>{item.name}</p>
              <Link to={`/detail/${item.name}`}>Ver Detalles</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;

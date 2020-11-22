import { Link, useParams } from "react-router-dom";

const CardDetail = ({ cardList }) => {
  let { id } = useParams();

  const foundCard = cardList.find((card) => card.name === id);

  return (
    <>
      <h1>Hola</h1>
      <h2>Nombre: {foundCard.name}</h2>
      <h2>Descripción: {foundCard.description}</h2>
      <Link to="/">Regresar al listado</Link>
    </>
  );
};

export default CardDetail;

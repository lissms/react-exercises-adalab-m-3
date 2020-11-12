import "./App.css";
import MediaCard from "./cardmedia";
import Description from "./description/description";
import lissa from "../components/images/lissa.png";
import felix from "../components/images/felix.png";

function MediaList() {
  return (
    <div className="App">
      <ul>
        <li>
          <MediaCard img={felix} name="Felix" date="19 de junio">
            <Description
              descriptionText="texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao."
              descriptionLikes="34"
            >
              123
            </Description>
          </MediaCard>
        </li>
        <li>
          <MediaCard img={lissa} name="Lissandra" date="21 de agosto">
            <Description
              descriptionText="texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao."
              descriptionLikes="33"
            >
              abc
            </Description>
          </MediaCard>
        </li>
      </ul>
    </div>
  );
}

export default MediaList;

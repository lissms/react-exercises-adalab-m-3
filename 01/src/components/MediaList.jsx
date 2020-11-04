import "./App.css";
import MediaCard from "./cardmedia";
import lissa from "../components/images/lissa.png";
import felix from "../components/images/felix.png";

function MediaList() {
  return (
    <div className="App">
      <ul>
        <li>
          <MediaCard
            img={felix}
            name="Felix"
            date="19 de junio"
            likes="34"
            text="texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao."
          />
        </li>
        <li>
          <MediaCard
            img={lissa}
            name="Lissandra"
            date="21 de agosto"
            likes="33"
            text="texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao."
          />
        </li>
      </ul>
    </div>
  );
}

export default MediaList;

import "./App.css";
import MediaCard from "./cardmedia";
import lissa from "../components/images/lissa.png";

function App() {
  return (
    <div className="App">
      <MediaCard
        img={lissa}
        name="Lissandra"
        date="21 de agosto"
        likes="33"
        text="texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao.texto descriptivo hola holi,chao."
      />
    </div>
  );
}

export default App;

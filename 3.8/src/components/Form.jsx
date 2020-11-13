import React from "react";
import form from "./form.css";

function Form(props) {
  const handlerChangeInput = (event) => {
    props.nameSet(event.target.value);
  };
  const handlerChangeText = (event) => {
    props.descriptionsSet(event.target.value);
  };
  console.log("props.name", props.name);
  return (
    <div>
      <form action="" className="form-container">
        <input
          type="text"
          name="text"
          value={props.name}
          placeholder="nombre de la peli"
          onChange={handlerChangeInput}
        />
        <textarea
          name=""
          value={props.descriptions}
          cols="30"
          rows="10"
          placeholder="descripcion de la peli"
          onChange={handlerChangeText}
        ></textarea>
        <select name="">
          <option value="Spanish">Español</option>
          <option value="English">Inglés</option>
          <option value="Portuguese">Portugués</option>
        </select>
      </form>
    </div>
  );
}

export default Form;

import React from "react";
import form from "./form.css";

function Form(props) {
  const handlerChange = (event) => {
    const target = event.target.id;
    console.log(target);

    if (target === "1") {
      props.nameSet(event.target.value);
    } else if (target === "2") {
      props.descriptionsSet(event.target.value);
    } else if (target === "3") {
      props.languageSet(event.target.value);
    }
    /*  const elementCliked =
      target === "1" ? props.nameSet(event.target.value) : props.descriptionsSet(event.target.value); */
  };

  console.log("props.name", props.name);
  return (
    <div>
      <form action="" className="form-container">
        <input
          type="text"
          name="text"
          id="1"
          value={props.name}
          placeholder="nombre de la peli"
          onChange={handlerChange}
        />
        <textarea
          id="2"
          name=""
          value={props.descriptions}
          cols="30"
          rows="10"
          placeholder="descripcion de la peli"
          onChange={handlerChange}
        ></textarea>
        <select name="" id="3" onChange={handlerChange} language={props.language} languageSet={props.languageSet}>
          <option value="Spanish">Español</option>
          <option value="English">Inglés</option>
          <option value="Portuguese">Portugués</option>
        </select>
      </form>
    </div>
  );
}

export default Form;

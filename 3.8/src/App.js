import CardInfo from "./components/CardInfo";
import Form from "./components/Form";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [language, setLanguage] = useState("");
  return (
    <div>
      <Form
        nameSet={setName}
        name={name}
        descriptions={descriptions}
        descriptionsSet={setDescriptions}
        language={language}
        languageSet={setLanguage}
      />
      <CardInfo />
    </div>
  );
};

export default App;

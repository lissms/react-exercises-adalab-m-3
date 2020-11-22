import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import api from "./service/api";
import CardList from "./components/cardList";
import CardDetail from "./components/cardDetail";

const App = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    api.getDataFromApi().then((data) => setCardList(data));
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <CardList cardList={cardList} />
      </Route>
      <Route path="/detail/:id">
        <CardDetail cardList={cardList} />
      </Route>
    </Switch>
  );
};

export default App;

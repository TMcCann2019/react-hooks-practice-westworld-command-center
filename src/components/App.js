import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestWorldMap from "../WestWorldMap";
import Headquarters from "../Headquarters";

function App() {
  const [hosts, setHosts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [areas, setAreas] = useState([]);

  return (
    <Segment id="app">
      <WestWorldMap />
      <Headquarters />
    </Segment>
  );
}

export default App;

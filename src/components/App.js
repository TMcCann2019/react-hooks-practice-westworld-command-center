import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [hosts, setHosts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(res => res.json())
      .then(setHosts)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/areas")
      .then(res => res.json())
      .then(setAreas)
  }, [])
  
  return (
    <Segment id="app">
      <WestworldMap formattedAreas={formattedAreas} setSelected={setSelected}/>
      <Headquarters handleActivate={handleActivate} updateHost={updateHost} setSelected={setSelected}/>
    </Segment>
  );
}

export default App;

import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

function Headquarters({handleActivate, updateHost, setSelected}) {
  const [logs, setLogs] = useState([]);

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage setSelected={setSelected}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details updateHost={updateHost}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel logs={logs} handleActivate={handleActivate}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;

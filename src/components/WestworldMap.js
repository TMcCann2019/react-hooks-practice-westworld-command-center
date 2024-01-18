import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ formattedAreas, setSelected }) {
  return <Segment id="map">
    <Area setSelected={setSelected}/>
  </Segment>;
}

export default WestworldMap;

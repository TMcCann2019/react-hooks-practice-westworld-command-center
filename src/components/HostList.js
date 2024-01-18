import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({setSelected}) {
  return (
    <Card.Group itemsPerRow={6}>
      <Host setSelected={setSelected}/>
    </Card.Group>
  );
}

export default HostList;

import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList() {
  return (
    <Card.Group itemsPerRow={6}>
      <Host />
    </Card.Group>
  );
}

export default HostList;

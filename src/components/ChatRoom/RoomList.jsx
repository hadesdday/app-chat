import { Collapse, Typography } from "antd";
import React from "react";

const { Panel } = Collapse;

function RoomList(props) {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header={"Danh sách phòng chat"}>
        <Typography.Link>Room1</Typography.Link>
        <Typography.Link>Room2</Typography.Link>
        <Typography.Link>Room3</Typography.Link>
      </Panel>
    </Collapse>
  );
}

export default RoomList;

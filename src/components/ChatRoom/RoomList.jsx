import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

function RoomList(props) {
  return (
    <Collapse defaultActiveKey={["1"]} ghost>
      <PanelStyled header={"Danh sách phòng chat"}>
        <LinkStyled>Room1</LinkStyled>
        <LinkStyled>Room2</LinkStyled>
        <LinkStyled>Room3</LinkStyled>
        <Button type="text" icon={<PlusSquareOutlined />} className="add-room">
          Thêm mới
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;

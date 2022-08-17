import { Col, Row } from "antd";
import React from "react";
import ChatWindow from "./ChatWindow";
import Sidebar from "./Sidebar";

function index(props) {
  return (
    <Row>
      <Col span={6}>
        <Sidebar />
      </Col>
      <Col span={18}>
        <ChatWindow />
      </Col>
    </Row>
  );
}

export default index;

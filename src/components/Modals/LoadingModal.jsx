import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

const OverlayDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 2;
  cursor: pointer;
`;

const ContentDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const spinnerIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

function LoadingModal() {
  return (
    <OverlayDiv>
      <ContentDiv>
        <Spin size="large" indicator={spinnerIcon} />
      </ContentDiv>
    </OverlayDiv>
  );
}

export default LoadingModal;

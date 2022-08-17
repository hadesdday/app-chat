import { Button, Col, Row, Typography } from "antd";
import React from "react";
import firebase, { auth } from "../firebase/config";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  const handleGoogleLogin = () => {
    auth.signInWithPopup(googleProvider);
  };

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        {/* rate 8 /24 */}
        <Col span={8}>
          {/* level = 3 = h3 */}
          <Title style={{ textAlign: "center" }} level={3}>
            App Chat
          </Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={handleGoogleLogin}
          >
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

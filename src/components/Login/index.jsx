import { Button, Col, Layout, Row, Typography } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";
import firebase, { auth, db } from "../firebase/config";
import { addDocument } from "../firebase/services";
import { generateKeywords } from "../Helper/GenerateKeywords";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const ContainerDiv = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url("https://cdn.wallpapersafari.com/71/80/25nOUq.jpg");
`;

const BoxDiv = styled.div``;

export default function Login() {
  const handleFbLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      const loggedUser = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName),
      };
      addDocument("users", loggedUser);
    }
  };

  const handleGoogleLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(
      googleProvider
    );
    if (additionalUserInfo?.isNewUser) {
      db.collection("users").add({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName),
      });
    }
  };

  return (
    <Layout>
      <ContainerDiv>
        <BoxDiv>
          <Row justify="center">
            {/* rate 8 /24 */}
            <Col span={8}>
              {/* level = 3 = h3 */}
              <Header style={{ background: "transparent" }}>
                <Title style={{ textAlign: "center" }} level={1}>
                  Fast Chat
                </Title>
              </Header>
              <Content>
                <Button
                  shape="round"
                  style={{ width: "100%", marginBottom: 5 }}
                  onClick={handleGoogleLogin}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                    style={{ width: 20, marginRight: 10 }}
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                  Đăng nhập bằng Google
                </Button>
                <Button
                  shape="round"
                  style={{ width: "100%" }}
                  onClick={handleFbLogin}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{ width: 20, marginRight: 10 }}
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                  Đăng nhập bằng Facebook
                </Button>
              </Content>
            </Col>
          </Row>
        </BoxDiv>
      </ContainerDiv>
    </Layout>
  );
}

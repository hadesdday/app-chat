import { Avatar, Button, Typography } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase/config";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    margin-left: 5;
  }
`;

function UserInfo(props) {
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      console.log({ data, snapshot ,doc:snapshot.docs});
    });
  }, []);

  return (
    <WrapperStyled>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text className="username">name</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}

export default UserInfo;

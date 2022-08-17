import { Avatar, Button, Typography } from "antd";
import React from "react";

function UserInfo(props) {
  return (
    <div>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text>name</Typography.Text>
      </div>
      <Button>Đăng xuất</Button>
    </div>
  );
}

export default UserInfo;

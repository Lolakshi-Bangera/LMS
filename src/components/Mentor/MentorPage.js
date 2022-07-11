import React, { useState } from "react";
import { Avatar, Breadcrumb, Form, Layout, Modal, Space } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Card } from "react-bootstrap";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import BatchListMentor from "./BatchListMentor";
import EmployeeListMentor from "./EmployeeListMentor";


const { Header, Sider, Content } = Layout;
const { Search } = Input;
const menu = (
  <Menu
    items={[
      {
        label: <a  style={{textDecoration:"none"}}href="https://www.antgroup.com">Profile</a>,
        key: "0",
      },
      {
        label: <a style={{textDecoration:"none"}}href="https://www.antgroup.com"> Change Password</a> ,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "Logout",
        key: "3",
      },
    ]}
  />
);
const LocalizedModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Change Password
      </Button>
      <Modal
        title="Change status"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Submit"
        cancelText="Cancel"
      >
       <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Batch Name</Form.Label>
    <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Batch ID</Form.Label>
    <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</Form.Select>
  </Form.Group>
</Form>
      </Modal>
    </>
  );
};

function MentorPage() {
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Layout>
          <Header style={{ background: "#FFFFFF" }}>
            <img
              src="./assets/logo1@2x.png"
              alt="logo"
              height="50px"
              width="160px"
            ></img>
            <Button
              icon={<SearchOutlined />}
              size="large"
              style={{
                marginLeft: "250px",
                background: "#0000000A",
                width: "500px",
              }}
            >
              Search Mentor/Employee
            </Button>
            <span style={{marginLeft:'200px'}}>
            
            <Dropdown overlay={menu} trigger={["click"]}>
              <a  style={{textDecoration:"none",color:"black"}} onClick={(e) => e.preventDefault()}>
                <Space>
                <Avatar src="./assets/Avatar@2x.png" />
                  Shalini
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            </span>
          </Header>

          <Layout>
            <Sider
              width={"80px"}
              style={{ background: "#FFFFFF", marginTop: "2px" }}
            >
              <Card
                style={{
                  width: "2.5rem",
                  marginLeft: "15px",
                  marginTop: "35px",
                  marginBottom: "15px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src="./assets/dashboard (3)@2x.png" />

                <p style={{ padding: "0px", margin: "0px", fontSize: "10px" }}>
                  Batch
                </p>
              </Card>
              <Card
                style={{
                  width: "2.5rem",
                  marginLeft: "15px",
                  marginBottom: "15px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src="./assets/group (1)@2x.png" />

                <p style={{ padding: "0px", margin: "0px", fontSize: "10px" }}>
                  Mentor
                </p>
              </Card>
            </Sider>

            <Layout>
              <Breadcrumb separator=">" style={{ margin: "7px 28px" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Batch</a>
                </Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 15px",
                  padding: 24,
                  minHeight: 480,
                  background: "#FFFFFF",
                }}
              >
               < BatchListMentor/>
               <EmployeeListMentor/>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Space>
      .
    </div>
  );
}

export default MentorPage;

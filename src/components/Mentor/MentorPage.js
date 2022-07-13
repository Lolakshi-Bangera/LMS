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
import {  Route, Routes, useNavigate } from "react-router-dom";
import PasswordModal from "./PasswordModal";
import ResetPasswordModal from "./ResetPasswordModal";
import BreadCrumb from "../../atom/BreadCrumb";


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
        label: <PasswordModal  />,
        key: "1",
      },
      
      {
        label: <a  style={{textDecoration:"none"}} href="/"> Logout</a>,
        key: "3",
      },
    ]}
  />
);


function MentorPage() {
  const [show,setShow] = useState(false)
  const handleClose=()=>setShow(false)
  let navigate=useNavigate()
  let navigteToBatch=()=>{
    navigate('batchlistmentor')
}
  let navigteToMentor=()=>{
    navigate('employeelistmentor')
}

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Layout>
          <Header style={{ background: "#FFFFFF" }}>
          <div className="d-flex">
            <div>
            <img
              src="./assets/logo1@2x.png"
              alt="logo"
              height="50px"
              width="160px"
            ></img>
            </div>
            <div>
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
            </div>
            <div style={{marginLeft:'200px'}}>
           
            
            <Dropdown overlay={menu} trigger={["click"]}>
              <button onClick={(e) => e.preventDefault()} style={{textDecoration:"none",color:"black"}} >
                <Space>
                <Avatar src="./assets/Avatar@2x.png" />
                  Shalini
                  <DownOutlined />
                </Space>
              </button>
            </Dropdown>
            
            </div>
            </div>
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

                <p style={{ padding: "0px", margin: "0px", fontSize: "8px" }}>
                  Dashboard
                </p>
              </Card>
              <Card
              onClick={navigteToBatch}
                style={{
                  width: "2.5rem",
                  marginLeft: "15px",
                  marginBottom: "15px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src="./assets/group (1)@2x.png" />

                <p style={{ padding: "0px", margin: "0px", fontSize: "10px" }}>
                  Batch
                </p>
              </Card>
            </Sider>

            <Layout>
            <BreadCrumb/>
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 15px",
                  padding: 24,
                  minHeight: 480,
                  background: "#FFFFFF",
                }}
              >
                <ResetPasswordModal setShow={setShow} handleClose={handleClose}/>
                <Routes>
               <Route path='batchlistmentor' element={< BatchListMentor/>}/>
               <Route path='employeelistmentor' element={<EmployeeListMentor/>}/>
                </Routes>
               
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

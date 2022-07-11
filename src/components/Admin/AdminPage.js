import React from "react";
import { Breadcrumb, Layout, Menu, Space } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { Card } from "react-bootstrap";
import MentorList from "./MentorList";
import RequestList from "./RequestList";
import BatchList from './BatchList';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import BreadCrumb from "../../../src/atom/BreadCrumb.js";
const { Header,  Sider, Content } = Layout;
const { Search } = Input;



function AdminPage() {
  let navigate=useNavigate()
  let navigteToBatchList=()=>{
    navigate("batchlist")
}
  let navigteToMentorList=()=>{
    navigate("mentorlist")
}
  let navigteToRequestList=()=>{
    navigate("requestlist")
}

let handleLogout=()=>{
  navigate('/')
}
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
            icon={<SearchOutlined/>}
            size="large"
            style={{
              marginLeft: "250px",
              background: "#0000000A",
              width: "450px",
             
              
            }}
          >
            Search Mentor/Employee
          </Button>
          <Button type="primary"  onClick={handleLogout} ghost style={{ marginLeft: "300px" }}>
            Logout
          </Button>
        </Header>
        
        <Layout>
        
            <Sider width={"80px"} style={{ background: "#FFFFFF",marginTop:"2px" }}>
              <Card 
              style={{ width: "2.5rem",
              marginLeft:"15px"
              ,marginTop:"35px",
              marginBottom:"15px" ,
              border:"none"}}
              onClick={navigteToBatchList}>
                <Card.Img variant="top" src="./assets/group (1)@2x.png" />
                
                  <p style={{padding:"0px",margin:"0px",fontSize:"10px"}}>Batch</p>
                
              </Card>
              <Card onClick={navigteToMentorList} style={{ width: "2.5rem",marginLeft:"15px",marginBottom:"15px",border:"none" }}>
                <Card.Img variant="top" src="./assets/team (4)@2x.png" />
                
                  <p style={{padding:"0px",margin:"0px",fontSize:"10px"}}>Mentor</p>
                
              </Card>
              <Card onClick={navigteToRequestList} style={{ width: "2.5rem",marginLeft:"15px",marginBottom:"15px",border:"none" }}>
                <Card.Img variant="top" src="./assets/add-user (2)@2x.png" />
                
                  <p style={{padding:"0px",margin:"0px",fontSize:"10px"}}>Request</p>
                
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
                <Routes>
                <Route path='batchlist' element={<BatchList/>}/>
                <Route path='mentorlist' element={<MentorList/>}/>
                <Route path='requestlist' element={<RequestList/>}/>
                </Routes>
                
              </Content>
            
          </Layout>
          
        </Layout>
        
      </Layout>
      </Space>
    </div>
  );
}

export default AdminPage;

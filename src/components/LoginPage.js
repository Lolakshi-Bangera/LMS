import React from "react";
import "./LoginPage.css";
import { Button, Form, Input } from "antd";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


function LoginPage() {
  const [employeeData, setEmployeeData] = useState({
    employeeId:'',
    password:''
  })
 

  const updateUserData=(event)=>{
    setEmployeeData({
       ...employeeData,
        [event.target.name]:event.target.value,
        
    });
};

  let navigate=useNavigate()
  
 const handleLogin=()=>{
  // console.log(`Employee Data Employee Id:${employeeData.employeeId} Password:${employeeData.password}`)
  if(employeeData.employeeId==="Admin"&&employeeData.password==="admin"){
    navigate('/admin')
  }
  else if(employeeData.employeeId==="Mentor"&&employeeData.password==="mentor"){
    navigate('/mentor')
  }
  else if(employeeData.employeeId==="Employee"&&employeeData.password==="employee"){
navigate('/employee')
  }
  else{
    navigate('/')
  }
  
 }
 let handleSubmit=(e)=>{
  e.preventDefault() 
}
  return (
    <div>
      <div className="login">
        <img
          id="one"
          src="./assets/wepik-2022319-214333@2x.png"
          alt="Technoelevate"
          height="650px"
          width="100%"
          opacity="0.64"
        ></img>
      </div>
      <div>
        <img
          id="img-2"
          src="./assets/wepik-2022319-214333-1@2x.png"
          alt="technoelevate"
        ></img>
        <h1 id="quote">
          Good things on <br /> your way!
        </h1>
      </div>
      <div className="formDiv">
        <img
          id="imgLogo"
          src="./assets/Artboard – 2@2x.png"
          alt="technoelevate"
          height="91px"
          width="244px"
        ></img>
        <h3 className="heading">Login</h3>
        <Form
        onSubmit={handleSubmit}
          layout="vertical"
          style={{ marginBottom: "80px" }}
          className="form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            style={{ marginBottom: "0px" }}
            className="formAlign"
            label={
              <label style={{ color: "white", fontSize: "10px" }}>
                Employee ID
              </label>
            }
            name="employeeId"
            requiredMark="optional"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input   name="employeeId" onChange={(event)=>{updateUserData(event)}} value={employeeData.employeeId} id="formItemInput" />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "0px" }}
            className="formAlign"
            label={
              <label style={{ color: "white", fontSize: "10px" }}>
                Password
              </label>
            }
            name="password"
            requiredMark="optional"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password  name="password" onChange={(event)=>{updateUserData(event)}} value={employeeData.password} id="formItemInput" placeholder="Enter Password" />
          </Form.Item>

          <Form.Item className="formItem">
            <Button htmlType="submit" id="formItemButton" onClick={handleLogin} >
              Login
            </Button>
            <Button htmlType="button" id="formItemButtonCancel" >
              Cancel
            </Button>
          </Form.Item>
        </Form>
        <hr
          style={{
            width: "240px",
            marginTop: "20px",
            marginBottom: "5px",
            marginLeft: "12px",
          }}
        ></hr>
        <span id="copy">Copyright &copy; 2018 Aleercio.com</span> &nbsp;{" "}
        <span id="copy">Terms & Conditions|Privacy policy</span>
      </div>
    </div>
  );
}

export default LoginPage;

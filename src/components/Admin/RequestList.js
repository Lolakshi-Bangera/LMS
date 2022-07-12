import React from 'react'
import { Layout, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Form, Table } from "react-bootstrap";
import {  Modal, Space } from 'antd';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
import RequestListTable from '../../Molecule/RequestListTable';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const { Header, Content } = Layout;
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
        Approve
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


const LocalizedModalTwo = () => {
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
        Reject
      </Button>
      <Modal
        title="Reason for rejection"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Submit"
        cancelText="Cancel"
      >
       <Form>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Reason</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
</Form>
      </Modal>
    </>
  );
};

function RequestList() {
 
    
  return (
    <div>
      
         <Header style={{ background: "#FFFFFF" }}>
        <span style={{ color: "#FAA81D" }}>
          <b>Request List</b>
        </span>
        <Button
          icon={<SearchOutlined />}
          size="large"
          style={{
            marginLeft: "400px",
            background: "#BCBCCB",
            width: "500px",
          }}
        >
          Search
        </Button>
        
      </Header>

      <Content
        className="site-layout-background"
        style={{
          margin: "0px",
          padding: 0,
          minHeight: 280,
          background: "#FFFFFF",
        }}
      >
        <div>
          <RequestListTable/>
          {/* <Table  hover>
            <thead class="table-active">
              <tr>
                <th>
                <Checkbox {...label} />
                </th>
                <th>No.</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>YOP</th>
                <th>Percentage</th>
                <th>Experience</th>
                <th>Contact No.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="table-default">
              <tr>
                <td>
                <Checkbox {...label} />
                </td>
                <td>01</td>
                <td>#154234553</td>
                <td>Aditi</td>
                <td>2022</td>
                <td>85%</td>
                <td>Fresher</td>
                <td>9914202222</td>
                <td>
                <Space>
    <LocalizedModal />
    <LocalizedModalTwo/>
  </Space>
                </td>
               
              </tr>
            </tbody>
          </Table> */}
        </div>
      </Content>
     
    </div>
  )
}

export default RequestList
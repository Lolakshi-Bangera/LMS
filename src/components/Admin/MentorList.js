import React from 'react'
import { Layout, Button, Select} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "react-bootstrap";
import { Modal } from "antd";
import { useState } from "react";
import {   Input,Form} from 'antd';
import { Checkbox } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const { Header, Content } = Layout;

function MentorList() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
         <Header style={{ background: "#FFFFFF" }}>
        <span style={{ color: "#FAA81D" }}>
          <b>Mentor List</b>
        </span>
        <Button
          icon={<SearchOutlined />}
          size="large"
          style={{
            marginLeft: "400px",
            background: "#BCBCCB",
            width: "400px",
            marginTop:"0px"
          }}
        >
          Search
        </Button>
        <Button
          type="primary"
          style={{
            marginLeft: "20px",
            background: "#FAA81D",
            color: "#FFFFFF",
          }}
          onClick={showModal}
        >
          +New Mentor
        </Button>
        <Modal
          title="Add new batch"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form layout="vertical">
          <Form.Item label="Mentor Name">
        <Input />
      </Form.Item>
          <Form.Item label="Employee ID">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Skills">
        <Select>
          <Select.Option value="demo">Select here</Select.Option>
          <Select.Option value="demo">React</Select.Option>
        </Select>
      </Form.Item>
     
      
    </Form>
        </Modal>
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
          <Table  hover>
            <thead class="table-active">
              <tr>
                <th>
                <Checkbox {...label} />

                </th>
                <th>No.</th>
                <th>Mentor Name</th>
                <th>Employee ID</th>
                <th>E-mail ID</th>
                
                <th>Skills</th>
                
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="table-default">
              <tr>
                <td>
                <Checkbox {...label} />

                </td>
                <td>01</td>
                <td>Chandan</td>
                <td> </td>
                <td> </td>
                <td> react angular</td>
                <td>
                <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="edit" size="small">
      <EditIcon sx={{ fontSize: 14 }} />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
     
      </Stack>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Content>
    </div>
  )
}

export default MentorList
import * as React from "react";
import { Layout, Button, Select, DatePicker, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {  Table } from "react-bootstrap";
import { Modal } from "antd";
import { useState } from "react";
import {   Input} from 'antd';
import { Checkbox,Backdrop } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const { Header, Content } = Layout;

function BatchList() {
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
    <Layout>
      <Header style={{ background: "#FFFFFF" }}>
        <span style={{ color: "#FAA81D" }}>
          <b>Batch List</b>
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
          +New Batch
        </Button>
        <Backdrop>
        <Modal
          title="Add new batch"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form layout="vertical">
          <Form.Item label="Batch Name">
        <Input />
      </Form.Item>
          <Form.Item label="Mentor Name">
        <Input />
      </Form.Item>
      <Form.Item label="Technologies">
        <Select>
          <Select.Option value="demo">Select here</Select.Option>
          <Select.Option value="demo">React</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Start Date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="End Date">
        <DatePicker />
      </Form.Item>
    </Form>
        </Modal>
        </Backdrop>
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
        
          <Table  hover >
            <thead class="table-active">
              <tr>
                <th>
                <Checkbox {...label} />
                </th>
                <th>No.</th>
                <th>Batch ID</th>
                <th>Batch Name</th>
                <th>Mentor Name</th>
                <th>Technologies</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="table-default">
              <tr>
                <td>
                <Checkbox {...label} />
                </td>
                <td>01</td>
                <td>#154234653</td>
                <td>abcd</td>
                <td>Chandan</td>
                <td>buttons</td>
                <td>14 Mar 2022</td>
                <td>14 Apr 2022</td>
                <td>In Progess</td>
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
        
      </Content>
    </Layout>
  );
}

export default BatchList;

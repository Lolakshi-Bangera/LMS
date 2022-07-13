import React from 'react'
import { Layout, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "react-bootstrap";
import { Checkbox } from '@mui/material';
import BatchTable from '../../Molecule/Mentor/BatchTable';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const { Header, Content } = Layout;

function BatchListMentor() {
  
  return (
    <div>
        <Header style={{ background: "#FFFFFF" }}>
        <span style={{ color: "#FAA81D" }}>
          <b>Batch List</b>
        </span>
        <Button
          icon={<SearchOutlined />}
          size="large"
          style={{
            marginLeft: "500px",
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
          <BatchTable/>
          {/* <Table bordered hover >
            <thead class="table-active">
              <tr>
                <th>
                <Checkbox {...label} />
                </th>
                <th>No.</th>
                <th>Batch ID</th>
                <th>Batch Name</th>
                <th>Technologies</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Batch Strength</th>
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
                    icon
                </td>
               
              </tr>
            </tbody>
          </Table> */}
        </div>
      </Content> 
    </div>
  )
}

export default BatchListMentor
import React, { useState } from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: 'No',
      dataIndex: 'no',
    },
    {
      title: 'Employee ID',
      dataIndex: 'employeeid',
    },
    {
      title: 'Employee Name',
      dataIndex: 'employeename',
    },
    
    {
      title: 'Mocks Taken',
      dataIndex:'mockstaken'
      
      
    },
    {
      title: 'Mocks Ratings',
      dataIndex: 'mocksratings',
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
    },
    {
     title:'Status',
     dataIndex:'status'
    },
   
   
  ];
  const data = [
   
  ];
  
  for (let i = 0; i < 2; i++) {

    data.push({
      key: i,
      no:i+1,
      employeeid:`#1542236`,
     employeename:`ABCDEF`,
      mockstaken:`2/5`,
      mocksrating:``,
      attendance:`13/23`,
      status:` Active >      Give Rating >`,

     
    });
  }
  

 const EmployeeTable = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
)
}
 export default EmployeeTable
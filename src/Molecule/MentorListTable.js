import React, { useState } from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: 'No',
      dataIndex: 'no',
    },
    {
      title: 'Mentor Name',
      dataIndex: 'mentorname',
    },
    {
      title: 'Employee ID',
      dataIndex: 'employeeid',
    },
    {
     title:'Skills',
     dataIndex:'skills'
    },
    {
      title: 'Action',
      dataIndex:'action'
      
      
    },
   
  ];
  const data = [
   
  ];
  
  for (let i = 0; i < 2; i++) {

    data.push({
      key: i,
      no:i+1,
      mentorname:`Chandana`,
     employeeid:`#1543267`,
      skills:`React `,
      action:``,
     
    });
  }
  

 const MentorListTable = () => {

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
 export default MentorListTable
import React, { useState } from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: 'No',
      dataIndex: 'no',
    },
    {
      title: 'Batch ID',
      dataIndex: 'batchid',
    },
    {
      title: 'Batch Name',
      dataIndex: 'address',
    },
    
    {
      title: 'Technologies',
      dataIndex:'technologies'
      
      
    },
    {
      title: 'Start Date',
      dataIndex: 'startdate',
    },
    {
      title: 'End Date',
      dataIndex: 'enddate',
    },
    {
     title:'Status',
     dataIndex:'status'
    },
    {
     title:'Batch Strength',
     dataIndex:'batchstrength'
    },
   
  ];
  const data = [
   
  ];
  
  for (let i = 0; i < 2; i++) {

    data.push({
      key: i,
      no:i+1,
      batchid:`#1542236`,
     technologies:`React`,
      startdate:`14 Mar 2022`,
      enddate:`14 May 2022`,
      status:``,
      batchstrength:` Attendance >`,

     
    });
  }
  

 const BatchTable = () => {

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
 export default BatchTable
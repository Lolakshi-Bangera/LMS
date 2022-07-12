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
     title:'YOP',
     dataIndex:'yop'
    },
    {
      title: 'Percentage',
      dataIndex:'percentage'
      
      
    },
    {
      title: 'Experience',
      dataIndex: 'experience',
    },
    {
      title: 'Contact No.',
      dataIndex: 'contactno',
    },
    {
     title:'Action',
     dataIndex:'action'
    },
   
  ];
  const data = [
   
  ];
  
  for (let i = 0; i < 2; i++) {

    data.push({
      key: i,
      no:i+1,
      employeeid:`#154234653`,
      employeename:`Aditi`,
     yop:`2022`,
      percentage:`85%`,
      experience:`Fresher`,
      contactno:`9999999910`,
      action:``,
     
    });
  }
  

 const RequestListTable = () => {

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
 export default RequestListTable
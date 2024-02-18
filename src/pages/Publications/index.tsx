import React from "react";
import SideBar from "../../component/SideBar";
import './index.css'
import {Table} from "antd";
import publications from '@/assets/publications.json'

export default () => {


  const columns = [
    {
      title: 'TITLE',
      dataIndex: 'title',
      key: 'title',
      width: '70%',
      render: (text: string, record: any) => <div className={'article'}>
        <a href={record.link}>{text}</a>
        <div>{record.authors}</div>
        <div>{record.pub}</div>
      </div>
    },
    {
      title: 'CITED BY',
      dataIndex: 'cite',
      key: 'cite',
      width: '15%',
      sorter: (a: any, b: any) => a.cite - b.cite,
    },
    {
      width: '15%',
      title: 'YEAR',
      dataIndex: 'year',
      key: 'year',
      sorter: (a: any, b: any) => a.year - b.year,
    },
  ];

  return <div className="page">
    <SideBar/>
    <div className='content'>
      <div className={'title'}>Selected/Recent Publications</div>
      <div className={'markdown'}>
        <Table
          pagination={false}
          dataSource={publications} columns={columns} />
      </div>
    </div>
  </div>
}

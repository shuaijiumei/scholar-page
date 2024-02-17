import React from "react";
import SideBar from "../../component/SideBar";
import './index.css'
import {Table} from "antd";

export default () => {

  const publications = [
    {
    title: 'LogPTR: Variable-Aware Log Parsing with Pointer Network iwqjkjakl sjdkljasklfjklasjfkljaklsjfkljkljaslkj ',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vg0moI0AAAAJ&sortby=pubdate&citation_for_view=vg0moI0AAAAJ:NaGl4SEjCO4C',
    authors: 'Author 1, Author 2',
    cite: '10',
    pub: 'Venue 1',
    year: '2021'
  }, {
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },{
    title: 'Paper 2',
    link: '',
    cite: '5',
    authors: 'Author 1, Author 2',
    pub: 'Venue 2',
    year: '2020'
  },]

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

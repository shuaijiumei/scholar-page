import React from 'react';
import './index.css'
import ServicesMd from "@/assets/Services.md"

import SideBar from "../../component/SideBar";

import ReactMarkdown from 'react-markdown';

export default () => {

  return <div className="page">
    <SideBar/>
    <div className='content'>
      <div className={'title'}>Services</div>
      <div className={'markdown'}><ReactMarkdown children={ServicesMd} /></div>
    </div>
  </div>
}

import React from 'react';
import './index.css'
// @ts-ignore
import AboutMeMd from "@/assets/AboutMe.md"

import SideBar from "../../component/SideBar";

import ReactMarkdown from 'react-markdown';

export default () => {

  return <div className="page">
    <SideBar/>
    <div className='content'>
      <div className={'title'}>About Me</div>
      <div className={'markdown'}><ReactMarkdown children={AboutMeMd} /></div>
    </div>
  </div>
}

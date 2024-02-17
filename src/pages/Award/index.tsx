import React from 'react';
import './index.css'

import AwardsMd from "@/assets/Awards.md"

import SideBar from "../../component/SideBar";

import ReactMarkdown from 'react-markdown';

export default () => {

  return <div className="page">
    <SideBar/>
    <div className='content'>
      <div className={'title'}>Awards</div>
      <div className={'markdown'}><ReactMarkdown children={AwardsMd} /></div>
    </div>
  </div>
}

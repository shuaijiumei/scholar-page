import React from "react";
import './index.css'
import {Avatar} from "antd";
import ReactMarkdown from "react-markdown";
import {EnvironmentOutlined, GithubOutlined, GlobalOutlined, ReadOutlined, TwitterOutlined} from "@ant-design/icons";
import info from '@/assets/Info.json'
import img from '@/assets/logo.png'
//@ts-ignore
import shortInfoMd from '@/assets/shortInfo.md'

export default () => {
  return <div className="sidebar">
    <div className={'profile'}>
      <Avatar
        size={{xs: 48, sm: 64, md: 80, lg: 128, xl: 160, xxl: 200}}
        src={img}
      />
      <div className={'info'}>
        <div className={'name'}>
          {info.name}
        </div>
        <div className={'shortInfo'}>
          <ReactMarkdown children={shortInfoMd}/>
        </div>
      </div>
    </div>
    <div className={'link'}>
      <div><EnvironmentOutlined className={'icon'}/>{info.location}</div>
      <div><GithubOutlined className={'icon'}/><a href={info.github}>Github</a></div>
      <div><TwitterOutlined className={'icon'}/><a href={info?.twitter}>Twitter</a></div>
      <div><GlobalOutlined className={'icon'}/><a href={info.email}>Email</a></div>
      <div><ReadOutlined className={'icon'}/><a href={info?.googleScholar}>Google Scholar</a></div>
    </div>
  </div>
}

import React from "react";
import './index.css'
import {Avatar} from "antd";
import ReactMarkdown from "react-markdown";
import {EnvironmentOutlined, GithubOutlined, GlobalOutlined, ReadOutlined, TwitterOutlined} from "@ant-design/icons";

export default () => {

  const name = '张三';
  const shortInfo = `Msc Student in CUHKSZ, looking for phd position 2025 fall. `;
  const avatarSrc = 'https://shuaijiumei.github.io/BoyinTan/public/logo.jpeg';

  const location = 'Shenzhen, China'
  const info = {
    github: 'https://github.com/PinjiaHe',
    twitter: '',
    email: '',
    googleScholar: '',
  }
  return <div className="sidebar">
    <div className={'profile'}>
      <Avatar
        size={{xs: 48, sm: 64, md: 80, lg: 128, xl: 160, xxl: 200}}
        src={avatarSrc}
      />
      <div className={'info'}>
        <div className={'name'}>
          {name}
        </div>
        <div className={'shortInfo'}>
          <ReactMarkdown children={shortInfo}/>
        </div>
      </div>
    </div>
    <div className={'link'}>
      <div><EnvironmentOutlined className={'icon'}/>{location}</div>
      <div><GithubOutlined className={'icon'}/><a href={info.github}>Github</a></div>
      <div><TwitterOutlined className={'icon'}/><a href={info.twitter}>Twitter</a></div>
      <div><GlobalOutlined className={'icon'}/><a href={info.email}>Email</a></div>
      <div><ReadOutlined className={'icon'}/><a href={info.googleScholar}>Google Scholar</a></div>
    </div>
  </div>
}

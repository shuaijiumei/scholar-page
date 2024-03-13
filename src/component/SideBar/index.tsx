import React from "react";
import './index.css'
import {Avatar, message} from "antd";
import ReactMarkdown from "react-markdown";
import copy from 'copy-to-clipboard';
import {EnvironmentOutlined, GithubOutlined, GlobalOutlined, ReadOutlined, TwitterOutlined} from "@ant-design/icons";
import info from '@/assets/Info.json'
import img from '@/assets/logo.png'
//@ts-ignore
import shortInfoMd from '@/assets/shortInfo.md'

export default () => {
  const showInfo = (e: Event) => {
    e.preventDefault();
    copy(info.email)
    message.success('Email copied to clipboard', 1);
  }
  // 拿到 avatar img 的宽度
  const avatarRef = React.useRef<HTMLImageElement>(null);
  const [avatarWidth, setAvatarWidth] = React.useState<number>(0);

  React.useEffect(() => {
    if (avatarRef.current) {
      const avatarWidth = avatarRef.current.offsetWidth * 5 + 30;
      setAvatarWidth(avatarWidth);
      // Use the avatarWidth as needed
    }
  }, [img]);


  return <div className="sidebar">
    <div className={'profile'}>
      <Avatar
        ref={avatarRef}
        className="avatar"
        size={{xs: 48, sm: 64, md:80, lg: 64, xl: 160, xxl: 150}}
        src={img}
      />
      <div className={'info'}>
        <div className={'name'}>
          {info.name}
        </div>
        <div className={'shortInfo'} style={{width: `${avatarWidth}px`}}>
          <ReactMarkdown children={shortInfoMd}/>
        </div>
      </div>
    </div>
    <div className={'link'} style={{width: `${avatarWidth}px`}}>
      <div><EnvironmentOutlined className={'icon'}/>{info.location}</div>
      <div><GithubOutlined className={'icon'}/><a href={info.github}>Github</a></div>
      <div><TwitterOutlined className={'icon'}/><a href={info?.twitter}>Twitter</a></div>
      <div><GlobalOutlined className={'icon'}/><a onClick={showInfo} href={''}>Email</a></div>
      <div><ReadOutlined className={'icon'}/><a href={info?.googleScholar}>Google Scholar</a></div>
    </div>
  </div>
}

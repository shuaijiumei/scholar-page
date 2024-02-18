import {history, Outlet} from 'umi';
import styles from './index.less';
import {Menu, type MenuProps} from "antd";
import React, {useState} from "react";
import Container from "@/component/Container";
import info from '@/assets/Info.json'

const items: MenuProps['items'] = [
    {
        label: (
            <span style={{fontSize: "1.5rem", fontWeight: "normal"}}>{info.name}</span>
        ),
        key: 'aboutme',
    },
    {
        label: 'Publications',
        key: 'publications',
    },
    {
        label: 'Awards',
        key: 'awards',
    },
    {
        label: 'Services',
        key: 'services',
    },
    {
        label: 'CV',
        key: 'cv',
    },
].filter(item => info.showBar.includes(item.key))

export default function Layout() {
    const [current, setCurrent] = useState('AboutMe');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        history.push(`/${e.key}`);  // 跳转到对应的页面
    };

    return (
        <>
            <Menu rootClassName={styles.nav} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
            <Container><Outlet/></Container>
        </>
    );
}

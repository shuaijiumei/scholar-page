## 个人学术首页模版
### assets 文件夹含义
`logo.png` 是个人的照片
`profile.pdf` 是个人简历 这俩是约定俗成的，只有这样命名才能成功解析

`AboutMe.md` 是个人的简介

`shortInfo.md` 是个人的简短介绍, 就是头像名字下面那一块

`Publications.md` 是个人的论文列表

`Service.md` 是个人的学术服务列表

`info.json` 是个人的基本信息
```json
{
  // 名称
  "name": "Boyin Tan",
 // 地点
  "location": "ShenZhen, China",
  "email": "BoyinTan1221@gmail.com",
  "github": "https://github.com/shuaijiumei",
  "twitter": "https://twitter.com/BoyinTan",
  "googleScholar": "https://scholar.google.com/citations?user=3z3z3z4AAAAJ&hl=en",
  // 选择要显示的导航栏， 去掉后就不会显示
  "showBar": [
    "aboutme",
    "publications",
    "awards",
    "services",
    "cv"
  ]
}
```

`publications.json` 是个人的论文信息,必须按照这个格式，本项目同时提供脚本爬取谷歌学术的论文信息，也可以自己编辑json文件
```json
[{
  "title": "LogPTR: Variable-Aware Log Parsing with Pointer Networks",
  "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vg0moI0AAAAJ&sortby=pubdate&citation_for_view=vg0moI0AAAAJ:NaGl4SEjCO4C",
  "authors": "Author 1, Author 2",
  "cite": "10",
  "pub": "ICSE 2024",
  "year": "2024"
}]
```

### 如何使用
1. clone 本项目
2. 安装 node 环境，并安装`cnpm: npm install cnpm`, `cnpm i` 安装依赖
3. 修改 `assets` 文件夹下的文件
4. 运行 `npm run build` 生成静态文件
5. 将生成的静态文件`dist`上传到你的服务器上，修改 nginx 配置文件，将`root`指向`dist`文件夹


### by the way
自动化脚本存放在 `/src/assets` 文件夹下，爬取前请修改 `urls`， 改为你自己的 google scholar 首页，自动存放数据在 `publications.json` 文件中
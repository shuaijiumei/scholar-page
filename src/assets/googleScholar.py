import urllib.request
from lxml import html
import json

base_url = 'https://scholar.google.com/'
# TODO 请将urls替换为你的google scholar的url
urls = 'https://scholar.google.com/citations?hl=zh-CN&user=lvhoqu4AAAAJ'

def getData(url):
    header_dict={'Host': 'scholar.google.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
                'Accept': '*/*',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                'Referer': 'https://scholar.google.co.id/citations?hl=zh-CN&user=oqYL6fQAAAAJ',
                'Connection': 'keep-alive'}
    req = urllib.request.Request(url=url,headers=header_dict)
    response = urllib.request.urlopen(req,timeout=120)

    tempdata = response.read()
    tempdata = tempdata.decode()
    return tempdata

def extract_info(html_content):
    tree = html.fromstring(html_content)
    title = tree.xpath('//*[@id="gsc_a_b"]/tr/td[1]/a')
    authors = tree.xpath('//*[@id="gsc_a_b"]/tr/td[1]/div[1]/text()')
    pub = tree.xpath('//*[@id="gsc_a_b"]/tr/td[1]/div[2]/text()')
    cites = tree.xpath('//*[@id="gsc_a_b"]/tr/td[2]/a/text()')
    year = tree.xpath('//*[@id="gsc_a_b"]/tr/td[3]/span/text()')
    publications = []

    # 遍历 0 - 20 然后提取上述信息的每一项组成一个字典
    for i in range(0,20):
        publications.append({
            'title': title[i].text,
            'link': base_url + title[i].attrib['href'], # 这里的url是相对路径，需要加上base_url
            'authors': authors[i],
            'pub': pub[i],
            'cites': cites[i],
            'year': year[i]
        })

    # 将字典转换为json格式
    json_str = json.dumps(publications, indent=4)
    
    # 将json格式的数据写入文件
    with open('publications.json', 'w') as f:
        f.write(json_str)

data = getData(urls)
extract_info(data)




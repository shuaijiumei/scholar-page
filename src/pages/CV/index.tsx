import React from "react";
import PdfViewer from "../../component/PdfViewer";
import pdfViewer from "../../component/PdfViewer";

export default () => {
    const pdfUrl = 'https://shuaijiumei.github.io/BoyinTan/asset/source/%E8%B0%AD%E5%8D%9A%E5%B0%B9-%E7%94%B5%E5%AD%90%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6.pdf'

    return <div>
        <div style={{fontSize: "2rem", margin: "2vh 2vw"}}>CV</div>
        <PdfViewer fileUrl={pdfUrl}/>
    </div>
}

import React from "react";
import PdfViewer from "../../component/PdfViewer";
import pdf from '@/assets/profile.pdf'
export default () => {
    return <div>
        <div style={{fontSize: "2rem", margin: "2vh 2vw"}}>CV</div>
        <PdfViewer fileUrl={pdf}/>
    </div>
}

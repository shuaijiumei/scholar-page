import React, { useState } from 'react';

interface PDFViewerProps {
  fileUrl: string; // PDF文件的URL
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {

  return (
    <div>
      <iframe
        src={fileUrl}
        style={{width: '100%', height: '100vh'}}
        frameBorder="0"
      >
        This browser does not support PDFs. Please download the PDF to view it: <a href={fileUrl}>Download PDF</a>.
      </iframe>
    </div>
  );
};

export default PDFViewer;

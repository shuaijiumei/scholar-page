import React, { useEffect, useState } from 'react';
import './index.css';
import { Button } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="pdf-mobile-container">
        <div className="pdf-mobile-buttons">
          <Button 
            type="primary" 
            icon={<DownloadOutlined />}
            onClick={() => window.open(fileUrl, '_blank')}
          >
            下载 PDF
          </Button>
          <Button
            icon={<EyeOutlined />}
            onClick={() => window.open(fileUrl, '_blank')}
          >
            在新标签页查看
          </Button>
        </div>
        <div className="pdf-mobile-tip">
          提示：移动端推荐下载后查看或在新标签页打开
        </div>
      </div>
    );
  }

  return (
    <div className="pdf-container">
      <iframe
        src={fileUrl}
        className="pdf-iframe"
        frameBorder="0"
      >
        This browser does not support PDFs. Please download the PDF to view it: <a href={fileUrl}>Download PDF</a>.
      </iframe>
    </div>
  );
};

export default PDFViewer;

import React from 'react';
import { Button, Result } from 'antd';
import {history} from "umi";

const App: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={()=> {history.replace('/aboutme')}} type="primary">Back Home</Button>}
    />
);

export default App;
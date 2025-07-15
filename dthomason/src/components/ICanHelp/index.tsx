import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ICanHelp from './ICanHelp';
import {CodeOutlined} from "@ant-design/icons";

const ICanHelpModalTrigger: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button className="professional-badge" onClick={() => setOpen(true)}>
                <CodeOutlined className="badge-icon"/>
                <span>How can I make your life better?</span>
            </Button>
            <Modal
                title=""
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                width={700}

            >
                <ICanHelp />
            </Modal>
        </>
    );
};

export default ICanHelpModalTrigger;
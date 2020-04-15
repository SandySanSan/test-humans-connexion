import React, { useState } from 'react';

import { Layout, Typography, Button, Modal } from 'antd';
import FormComponent from '../form/Form.component';
const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = () => {
    const [visible, setVisible] = useState(false);

    return (
        <Header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
            <div>
                <Title
                    level={3}
                    style={{
                        color: '#ebfdff',
                        padding: '15px',
                    }}>
                    Liste des utilisateurs
                </Title>
            </div>
            <div>
                {/* Opens modal */}
                <Button type='primary' onClick={() => setVisible(true)}>
                    Ajouter un utilisateur
                </Button>
            </div>

            <Modal
                title='Ajouter un utilisateur'
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={[
                    <Button key='cancel' onClick={() => setVisible(false)}>
                        Annuler
                    </Button>,
                ]}>
                <FormComponent setVisible={setVisible} />
            </Modal>
        </Header>
    );
};

export default HeaderComponent;

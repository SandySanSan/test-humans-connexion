import React, { useState } from 'react';
import { Card, Button, Avatar, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CardList from './Card.component';

const { Meta } = Card;

const UserListItem = ({ user, handleDelete }) => {
    const [visible, setVisible] = useState(false);

    const { firstName, lastName, email, city, company, id } = user;

    return (
        <>
            <CardList
                user={user}
                setVisible={setVisible}
                handleDelete={handleDelete}
            />

            {/* modal */}
            <Modal
                title='Supprimer un utilisateur'
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={[
                    <Button key='cancel' onClick={() => setVisible(false)}>
                        Annuler
                    </Button>,
                    <Button
                        key='delete'
                        type='primary'
                        danger
                        onClick={() => handleDelete(id)}>
                        Supprimer
                    </Button>,
                ]}>
                <Card>
                    {/* card header */}
                    <Meta
                        avatar={<Avatar icon={<UserOutlined />} />}
                        title={`${firstName} ${lastName}`}
                        style={{
                            marginBottom: '20px',
                            backgroundColor: '#ecffff',
                            padding: '10px',
                        }}
                    />
                    {/* card content */}
                    <p>Email : {email}</p>
                    <p>Ville : {city}</p>
                    <p>Entreprise : {company}</p>
                </Card>
            </Modal>
        </>
    );
};

export default UserListItem;

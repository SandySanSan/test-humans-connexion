import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../../redux/users/users-actions';

import { Card, Button, Avatar, Modal, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CardList from './Card.component';

const { Meta } = Card;

const UserListItem = ({ user, deleteUser }) => {
    // handles modal's visibility
    const [visible, setVisible] = useState(false);

    const { firstName, lastName, email, city, company, id } = user;

    const handleDelete = (id) => {
        deleteUser(id);
        // open notification after an user is deleted
        openNotificationWithIcon();
    };

    const openNotificationWithIcon = () => {
        notification['success']({
            message: 'Suppression réussie !',
            description: "L'utilisateur a bien été supprimé",
            placement: 'topRight',
            duration: 4,
        });
    };

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
const mapDispatchToProps = {
    deleteUser,
};
export default connect(null, mapDispatchToProps)(UserListItem);

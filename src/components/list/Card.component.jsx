import React from 'react';
import { Card, Button, Avatar } from 'antd';
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Meta } = Card;

const DeleteStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

const CardList = ({
    user: { firstName, lastName, email, city, company, id },
    setVisible,
    handleDelete,
}) => {
    return (
        <Card>
            {/* header */}
            <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={`${firstName} ${lastName}`}
                style={{
                    marginBottom: '20px',
                    backgroundColor: '#ecffff',
                    padding: '10px',
                }}
            />
            {/* content */}
            <p>Email : {email}</p>
            <p>Ville : {city}</p>
            <p>Entreprise : {company}</p>
            <DeleteStyle>
                <div>
                    {/* opens modal to delete user */}
                    <Button
                        type='primary'
                        danger
                        icon={<CloseOutlined />}
                        onClick={() => setVisible(true)}>
                        Supprimer
                    </Button>
                </div>
            </DeleteStyle>
        </Card>
    );
};

export default CardList;

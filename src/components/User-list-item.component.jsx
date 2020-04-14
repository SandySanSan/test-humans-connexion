import React from 'react';
import { Card, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import styled from 'styled-components';

const CallToAction = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

const UserListItem = ({
    user: { firstName, lastName, email, city, company },
}) => {
    return (
        <Card title={`${firstName} ${lastName}`} actions={[]}>
            <p>Email : {email}</p>
            <p>Ville : {city}</p>
            <p>Companie : {company}</p>
            <CallToAction>
                <div>
                    <Button type='primary' danger icon={<CloseOutlined />}>
                        Delete user{' '}
                    </Button>
                </div>
            </CallToAction>
        </Card>
    );
};

export default UserListItem;

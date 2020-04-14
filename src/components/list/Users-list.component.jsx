import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from '../../redux/users/users-actions';
import UserListItem from './User-list-item.component';
import { Row, Col, notification } from 'antd';

import styled from 'styled-components';

const Container = styled.div`
    width: 80vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
    margin: 15px auto;
`;

class UsersList extends React.Component {
    componentDidMount() {
        // retrieve users data
        this.props.fetchUsers();
    }

    handleDelete = (id) => {
        this.props.deleteUser(id);
        // open notification after an user is deleted
        this.openNotificationWithIcon();
    };

    openNotificationWithIcon = () => {
        notification['success']({
            message: 'Suppression réussie !',
            description: "L'utilisateur a bien été supprimé",
            placement: 'topRight',
            duration: 2,
        });
    };

    render() {
        const { users } = this.props;
        return (
            <Container>
                <Row gutter={16}>
                    {users &&
                        users.map((user) => (
                            <Col
                                span={12}
                                style={{
                                    width: 300,
                                    padding: '15px',
                                    borderRadius: '10px',
                                }}
                                key={user.id}>
                                <UserListItem
                                    user={user}
                                    handleDelete={this.handleDelete}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
    };
};

const mapDispatchToProps = {
    fetchUsers,
    deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

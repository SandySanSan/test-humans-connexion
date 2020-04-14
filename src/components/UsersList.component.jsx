import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/users/users-actions';
import UserListItem from './User-list-item.component';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin: 15px auto;
`;

class UsersList extends React.Component {
    componentDidMount() {
        // retrieve users data
        this.props.fetchUsers();
    }

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
                                }}>
                                <UserListItem user={user} key={user.id} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

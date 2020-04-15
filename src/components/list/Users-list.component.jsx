import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/users/users-actions';
import UserListItem from './User-list-item.component';
import { Row, Col, Select, Form, Input, Button } from 'antd';

import styled from 'styled-components';

const MainContainer = styled.div`
    width: 80vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    margin: 15px auto;
`;

const ResultsContainer = styled.div`
    width: 80vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding: 15px;
    margin: 15px auto;
`;

const FiltersContainer = styled.div`
    width: 600px;
    height: auto;
    padding: 25px;
    background-color: #fdfdfd;
    margin-bottom: 20px;
    box-shadow: 5px 5px 10px #e6e6e6;
    border-radius: 6px;
    justify-content: flex-end;
    align-items: flex-end;
`;

const NoDataStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: red;
`;

const UsersList = ({ fetchUsers, users }) => {
    const [filterCity, setFilterCity] = useState('');
    const [filterName, setFilterName] = useState('');
    const [filterCompany, setFilterCompany] = useState('');

    // retrieve users data
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSelect = (value) => {
        setFilterCity(value);
    };

    const clearFilters = () => {
        setFilterCity('');
        setFilterCompany('');
        setFilterName('');
    };

    return (
        <>
            <MainContainer>
                <FiltersContainer>
                    <div style={{ textAlign: 'center', padding: '15px' }}>
                        Recherche d'utilisateurs
                    </div>
                    {/* form used for filter results */}
                    <Form
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 19 }}
                        layout='horizontal'
                        size='middle'>
                        <Form.Item label='Ville'>
                            <Select
                                defaultValue={filterCity}
                                onChange={handleSelect}
                                placeholder='Rechercher par ville'>
                                <Select.Option value=''>
                                    Toutes les villes
                                </Select.Option>
                                {users &&
                                    users.map((user) => (
                                        <Select.Option
                                            key={user.id}
                                            value={`${user.city}`}>
                                            {user.city}
                                        </Select.Option>
                                    ))}
                            </Select>
                        </Form.Item>
                        <Form.Item label='Nom'>
                            <Input
                                onChange={(e) => setFilterName(e.target.value)}
                                placeholder='Rechercher par nom'
                                value={filterName}
                            />
                        </Form.Item>
                        <Form.Item label='Entreprise'>
                            <Input
                                onChange={(e) =>
                                    setFilterCompany(e.target.value)
                                }
                                placeholder='Rechercher par entreprise'
                                value={filterCompany}
                            />
                        </Form.Item>
                    </Form>
                    <Button onClick={() => clearFilters()}>
                        Effacer les critères
                    </Button>
                </FiltersContainer>
                <ResultsContainer>
                    {users && !users.length && (
                        <NoDataStyle>
                            <div>Aucun utilisateur enregistré.</div>
                        </NoDataStyle>
                    )}
                    {/* display results */}
                    <Row style={{ width: '100%' }}>
                        {users &&
                            users
                                .filter((user) =>
                                    filterCity ? user.city === filterCity : user
                                )
                                .filter((user) =>
                                    filterName
                                        ? user.lastName
                                              .toLowerCase()
                                              .includes(
                                                  filterName
                                                      .toLowerCase()
                                                      .trim()
                                              )
                                        : user
                                )
                                .filter((user) =>
                                    filterCompany
                                        ? user.company
                                              .toLowerCase()
                                              .includes(
                                                  filterCompany
                                                      .toLowerCase()
                                                      .trim()
                                              )
                                        : user
                                )
                                .map((user) => (
                                    <Col
                                        span={12}
                                        style={{
                                            width: 300,
                                            padding: '15px',
                                            borderRadius: '10px',
                                        }}
                                        key={user.id}>
                                        <UserListItem user={user} />
                                    </Col>
                                ))}
                    </Row>
                </ResultsContainer>
            </MainContainer>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
    };
};

const mapDispatchToProps = {
    fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

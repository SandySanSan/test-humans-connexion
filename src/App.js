import React from 'react';
import UsersList from './components/UsersList.component';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>List of Users</Header>
                    <Content>
                        <UsersList />
                    </Content>
                    <Footer>Test Human's Connexion</Footer>
                </Layout>
            </div>
        );
    }
}

export default App;

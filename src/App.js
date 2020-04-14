import React from 'react';
import UsersList from './components/list/Users-list.component';
import HeaderComponent from './components/header/Header.component';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Footer, Content } = Layout;

class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <HeaderComponent />
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

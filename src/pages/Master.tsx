import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd'
import type { MenuProps } from 'antd';
import { useUser } from '../hooks/useUser';

const { Header, Content } = Layout;
const { Text } = Typography;

export const Master: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useUser()

    const items: MenuProps['items'] = [
        {
            label: 'Home',
            key: 'home', 
            onClick: () => { navigate('/') } 
        },
        {
            label: 'Users',
            key: 'users', 
            onClick: () => { navigate('/users') } 
        }
    ];

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
                <Text style={{ color: 'blueviolet' }}>{[user.name, user.surname].join('').toUpperCase()}</Text>
            </Header>
            <Content style={{ padding: '0 48px', minHeight: '40rem', backgroundColor: 'white' }}>
                <Outlet />
            </Content>
        </Layout>
    )
}
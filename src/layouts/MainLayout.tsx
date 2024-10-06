import clsx from 'clsx';
import styleModule from './mainLayout.module.css';
import { Link, Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;
const MainLayout = () => {
    return (
        <Layout className={clsx(styleModule.container)}>
            <Header className={styleModule.header}>
                <Link to='/'>HCU FrontEnd Coding Test - Nguyễn Tuấn Anh</Link>
            </Header>
            <Content>
                <Outlet />
            </Content>
            <br />
            <Footer>Nguyen Tuan Anh - Todo app</Footer>
        </Layout>
    );
};

export default MainLayout;

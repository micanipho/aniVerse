import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const { Header, Content } = Layout;

const ClientLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh'}}>
            <Header style={{ padding: 0}}>
                <Navbar />
            </Header>
            <Content style={{ width: '100%'}}>
                <div style={{ background: colorBgContainer, padding: 2, borderRadius: borderRadiusLG, height: '100%'}}>
                    <Outlet />
                </div>
            </Content>
            <Footer />
        </Layout>

    );
}
export default ClientLayout;
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const { Content } = Layout;

const ClientLayout = () => {

    return (
        <Layout style={{ minHeight: '100vh'}}>
            <Navbar />
            <Content style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: '#222831', padding: 2, flex: 1 }}>
                    <Outlet />
                </div>
            </Content>
            <Footer />
        </Layout>

    );
}
export default ClientLayout;
import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter style={{ textAlign: 'center', background: '#222831', color: '#EEEEEE' }}>
            aniVerse ©{new Date().getFullYear()} Created by Nhlakanipho
        </AntFooter>
    );
};

export default Footer;

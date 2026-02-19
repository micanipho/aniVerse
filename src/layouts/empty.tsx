import { Layout, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useStyles } from "../components/navbar/style/style";
import Footer from "../components/footer/footer";

const { Header, Content } = Layout;

const EmptyLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const { styles, cx } = useStyles();
    const location = useLocation();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ padding: 0 }}>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.logo}>
                        AniVerse
                    </Link>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link
                                to="/anime"
                                className={cx(styles.link, {
                                    [styles.activeLink]: location.pathname === "/anime",
                                })}
                            >
                                Anime
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link
                                to="/manga"
                                className={cx(styles.link, {
                                    [styles.activeLink]: location.pathname === "/manga",
                                })}
                            >
                                Manga
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link
                                to="/login"
                                className={cx(styles.link, {
                                    [styles.activeLink]: location.pathname === "/login",
                                })}
                            >
                                Login
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link
                                to="/signup"
                                className={cx(styles.link, {
                                    [styles.activeLink]: location.pathname === "/signup",
                                })}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Header>
            <Content style={{ width: '100%' }}>
                <div style={{ background: colorBgContainer, padding: 2, borderRadius: borderRadiusLG, height: '100%' }}>
                    <Outlet />
                </div>
            </Content>
            <Footer />
        </Layout>
    );
}
export default EmptyLayout;

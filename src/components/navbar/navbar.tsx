import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStyles } from "./style/style";
import { LogoutOutlined } from "@ant-design/icons";
import { useAuthActions } from "src/providers/authProvider";

const menuItems = [
    {
        name: "Anime",
        path: "/anime",
    },
    {
        name: "Manga",
        path: "/manga",
    },
    {
        name: "Search",
        path: "/search",
    },
];

export const Navbar = () => {
    const { styles, cx } = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuthActions();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.logo}>
                AniVerse
            </Link>
            <ul className={styles.ul}>
                {menuItems.map((item) => (
                    <li className={styles.li} key={item.name}>
                        <Link
                            to={item.path}
                            className={cx(styles.link, {
                                [styles.activeLink]: location.pathname === item.path,
                            })}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <LogoutOutlined
                className={styles.logoutIcon}
                onClick={handleLogout}
                title="Logout"
            />
        </nav>
    );
};
export default Navbar;

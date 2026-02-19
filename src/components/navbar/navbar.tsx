import { Link, useLocation } from "react-router-dom";
import { useStyles } from "./style/style";

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
        </nav>
    );
};
export default Navbar;

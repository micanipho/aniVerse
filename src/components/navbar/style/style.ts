import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    nav: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #222831;
    color: white;
    width: 100%;
    box-sizing: border-box;
  `,
    logo: css`
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    color: #00ADB5;
  `,
    ul: css`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 10px;
  `,
    li: css`
    margin: 0 15px;
    color: #fff;
  `,
    link: css`
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    &:hover {
      color: #1f7f84ff;
    }
  `,
    activeLink: css`
    color: #00ADB5;
    font-weight: bold;
  `,
    logoutIcon: css`
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: #00ADB5;
    }
  `,
});

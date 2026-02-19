import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    loginForm: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #222831;
    color: white;
  `,

  label: css`
    color: white;
    font-size: 1.2rem;
  `,

  input: css`
    color: white;
    font-size: 1.2rem;
  `,

  button: css`
    color: white;
    background-color: #00ADB5;
    border-color: #00ADB5;
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
    height: 100%;
  `,
  buttonHover: css`
    background-color: #1f7f84ff;
    border-color: #1f7f84ff;
    color: white;
  `,
});
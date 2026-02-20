import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useStyles } from './style/style';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthActions } from 'src/providers/authProvider';

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const Login: React.FC = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const { login } = useAuthActions();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    try {
        login({ username: values.username!, password: values.password! });
        message.success("Login successful");
        navigate("/search");
    } catch (error: any) {
        message.error(error?.message || "Invalid credentials");
    }
};
const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  return (
    <div className={styles.loginForm}>
      <h1 className={styles.title}>LOGIN</h1>
      <Form
        name="basic"
        layout="vertical"
        style={{ width: '100%', maxWidth: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={<span className={styles.label}>Username</span>}
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input className={styles.input} />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className={styles.label}>Password</span>}
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className={styles.input} />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox style={{ color: 'white' }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Submit
          </Button>
        </Form.Item>

        <Form.Item label={null}>
          <span style={{ color: '#eeeeee' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ color: '#00ADB5', fontWeight: 'bold' }}>
              Sign Up
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
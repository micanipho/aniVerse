import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useStyles } from '../login/style/style';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthActions } from 'src/providers/authProvider';

type FieldType = {
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const SignUp: React.FC = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const { signup } = useAuthActions();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    try {
      signup({
        firstName: values.firstName!,
        lastName: values.lastName!,
        username: values.username!,
        password: values.password!,
      });
      message.success("Account created! Please log in.");
      navigate("/login");
    } catch (error: any) {
      message.error(error?.message || "Signup failed");
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.loginForm}>
      <h1 className={styles.title}>SIGN UP</h1>
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
            label={<span className={styles.label}>First Name</span>}
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name!' }]}
        >
            <Input className={styles.input} />
        </Form.Item>
        <Form.Item<FieldType>
            label={<span className={styles.label}>Last Name</span>}
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name!' }]}
        >
            <Input className={styles.input} />
        </Form.Item>
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
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#00ADB5', fontWeight: 'bold' }}>
              Login
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;


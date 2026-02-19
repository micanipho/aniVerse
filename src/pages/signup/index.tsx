import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { useStyles } from '../login/style/style';

type FieldType = {
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SignUp: React.FC = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.loginForm}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
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
      </Form>
    </div>
  );
};

export default SignUp;

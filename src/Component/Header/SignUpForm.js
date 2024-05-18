import { Form, Input, Button } from 'antd';

export function SignUpForm({ onSwitch }) {
    const handleSignUp = (values) => {
        console.log('Sign Up Values:', values);
    };
    return (
        <Form layout="vertical" onFinish={handleSignUp}>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Sign Up
                </Button>
            </Form.Item>
            <p className="text-center">
                Already have an account?{' '}
                <Button type="link" onClick={onSwitch}>
                    Sign In
                </Button>
            </p>
        </Form>
    );
}
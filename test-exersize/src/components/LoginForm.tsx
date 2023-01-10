import React from 'react';
import { Button, Form, Input } from 'antd';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IUser} from "../models/IUser";
import {useActions} from "../hooks/useActions";

const LoginForm = () => {
    const {isLoading, error} = useTypedSelector(state => state.auth);
    const {login} = useActions()
    const onFinish = async (values: IUser) => {
       login(values.username, values.password)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {error && <div className='error-block'>
                    {error}
                </div>}

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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button loading={isLoading} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
    );
};

export default LoginForm;

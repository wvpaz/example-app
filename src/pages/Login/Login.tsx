import { Button, Flex, Form, Input } from 'antd';
import loginCover from '../../assets/images/login_cover.jpg';
import { useUser } from '../../hooks/useUser';
import { UserSchema } from '../../@types/user.types';

type LoginSchema = {
    username: string, 
    password: string
}


export const Login: React.FC = () => {
    const { setUser } = useUser();
    
    const onFinish = (values: LoginSchema) => {
        if (values.username === 'wvpaz' && values.password === '12345') {
            const _user: UserSchema = { 
                name: import.meta.env.VITE_APP_USER_NAME, 
                surname: import.meta.env.VITE_APP_USER_SURNAME, 
                age: import.meta.env.VITE_APP_USER_AGE 
            };
            
            setUser(_user)
        }

    };

    return (
        <Flex align='center' justify='center' style={{ width: '100%', height: '100%' }}>
            <Flex style={{ border: '1px solid #ebebeb', height: '30rem' }}>
                <section style={{ minWidth: '15rem', padding: '2rem' }}>
                    <Flex style={{ height: '100%' }} justify='center' vertical>
                        <Form
                            name='login'
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            onFinish={onFinish}
                            autoComplete='off'
                            size='large'
                        >
                            <Form.Item<LoginSchema> 
                                label='Username'
                                name='username'
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input /> 
                            </Form.Item>
                            <Form.Item<LoginSchema> 
                                label='Password'
                                name='password'
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password /> 
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Flex>
                </section>
                <img src={loginCover} style={{ height: '100%' }} alt='The example-app logo' />
            </Flex>
        </Flex>
    );
}
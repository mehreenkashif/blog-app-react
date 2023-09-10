
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import AuthService from '../../Services/auth.service';
import Categaries from '../Categories/Categaries';
// import Categaries from '../Categaries/Categaries';
const Login = () => {
  const onFinish = async (values) => {
    // console.log('Success:', values);
  const {ok,data}= await AuthService.Login('/login',values);
    
  
// console.log(data?.results);

    if (ok){
     localStorage.setItem('token',data?.results?.token)
     localStorage.setItem('username', data?.results?.username)
      // window.location.href = "/"
   }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='formcontainer'>
      
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={Categaries}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Login;
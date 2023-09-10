
import { Button, Checkbox, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import React from 'react';
import { userservice } from "../../Services/UserServices";
import "./Register.css";



// import AuthService from '.auth.service' 


const Register = () => {

 const onFinish= async(values)=> {
      const info ={
          user_firstname :values.firstname,
          user_lastname:values.lastname,
          password: values.Password,
          email: values.email
         };
    
       const {ok,data}=  await userservice.register(info);

         if (ok){
          localStorage.setItem('token',data?.result?.token)
          localStorage.setItem('username', data?.result?.username)
           window.location.href = "/"
        }

    console.log('Success:', values);
    

  };
  return (
    < div className='maindiv'>
      <h1>REGISTERATION</h1>
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
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="firstname"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="lastname"
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
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
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
export default Register;
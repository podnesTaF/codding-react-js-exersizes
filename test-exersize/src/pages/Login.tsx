import React from 'react';
import LoginForm from "../components/LoginForm";
import {Card} from "antd";

const Login = () => {


    return (
        <div className='login-wrapper'>
           <Card>
               <LoginForm />
           </Card>
        </div>
    );
};

export default Login;

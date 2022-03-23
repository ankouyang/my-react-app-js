import React, { Component } from "react";
import { Input, Button, Form } from "antd";
import styles from './login.module.scss' 
import classNames from "classnames/bind";


const  cls =  classNames.bind(styles)
const FormItem = Form.Item;

class Login extends Component {

  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
    };

    return (
      <div className={cls('login-content')}>
        <Form>
          <FormItem label="账号" {...formItemLayout}>
            <Input
              type="email"
              style={{ width: 300 }}
              autoComplete="off"
              placeholder=""
            />
          </FormItem>

          <FormItem label="密码" {...formItemLayout}>
            <Input
              type="password"
              style={{ width: 300 }}
              autoComplete="off"
              placeholder=""
            />
          </FormItem>

          <FormItem className={cls('login-btn')}>
            <Button  type="primary" size="large">
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Login;

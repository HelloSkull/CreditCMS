import React ,{ Component } from 'react';
import { Form, Icon, Input, Button , Row, Col, Slider, Card } from 'antd';
const FormItem = Form.Item;

class LoginForm extends Component{
  okHandler =(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const { onOk } = this.props;
        if (!err) {
          onOk(values)
        }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row gutter={20}>
        <Col span={7} />
        <Col span={10} >
          <Card title="登录框" bordered={true}>
            <Form onSubmit={this.okHandler}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入用户名' }]
                })(
                  <Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }]
                })(
                  <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" style={{margin: '0 auto', display: 'block'}}>登录</Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
        <Col span={7} />
      </Row>
    );
  }
}

export default Form.create()(LoginForm);

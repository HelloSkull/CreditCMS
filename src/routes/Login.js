import React,{ Component } from "react";
import { connect } from 'dva';
import LoginForm from "../components/Users/LoginForm";

class Login extends Component{

  okHandler(values){
    const { dispatch } = this.props;
    dispatch({
      type: 'users/login',
      params : {
        type:1,
        formParams:values
      }
    })
  }
  render(){
    return (
        <LoginForm onOk = { this.okHandler.bind(this)}/>
      )
  }

}

export default connect()(Login)

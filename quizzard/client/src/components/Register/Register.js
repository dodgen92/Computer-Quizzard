import React, { Component } from 'react'
export default Register

class Register extends Component {
    constructor () {
        super()
        this.state = {
        //username
          name: '',
          password: '',
          email: '',
}
this.onChange=this.onChange.bind(this);
this.onSubmit=this.onSubmit.bind(this);
}
}

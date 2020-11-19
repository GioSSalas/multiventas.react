import React from 'react'

import '../../styles/fade.css'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

class Login extends React.Component{

    constructor(props){
        super(props)

        this.handleSubmit=this.handleSubmit.bind(this)
        this.changeForm=this.changeForm.bind(this)

        this.state={
            formType:2,
        }
    }

    componentDidMount(){
        window.document.title="Iniciar sesión | Multiventas TPV"
    }

    handleSubmit(e){
        e.preventDefault()
    }

    changeForm(e,type){
        e.preventDefault()
        this.setState({formType:type})
    }

    render(){
        return(
            <div className="w-screen h-screen bg-gray-200 relative flex items-center justify-center">              
                {this.state.formType===1?
                <LoginForm changeForm={this.changeForm}> </LoginForm>
                :
                <SignupForm changeForm={this.changeForm}></SignupForm>
                }
            </div>
        )
    }
}

export default Login
import React from 'react'
import multiventas from '../../resources/images/multiventas.png'
import { Button, Input } from '../forms'

class LoginForm extends React.Component{
    constructor(props){
        super(props)

        this.handleChangeEmail=this.handleChangeEmail.bind(this)
        this.handleChangePassword=this.handleChangePassword.bind(this)

        this.state={
            email:'',
            password:''
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            document.getElementById('wrap-login').classList.add('fade-enter-active')
        },500)
    }

    handleChangeEmail(e){
        this.setState({email:e.target.value})
    }
    handleChangePassword(e){
        this.setState({password:e.target.value})
    }

    render(){
        return(
            <div id="wrap-login" className="w-96 bg-white rounded p-2 flex flex-wrap items-center shadow-md fade-enter">
                <div className="logo h-12 my-4 w-full">
                    <img src={multiventas} alt="Multiventas logo" className="h-12 mx-auto"></img>
                </div>
                <form className="w-full py-4 block" type="post" onSubmit={this.handleSubmit}>
                    <Input 
                        type="text" 
                        name="email" 
                        placeholder="Correo electrónico" 
                        value={this.state.email} 
                        onChange={this.handleChangeEmail} />
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder="Contraseña" 
                        value={this.state.password} 
                        onChange={this.handleChangePassword} />
                    <div className="w-full mb-2 text-right">
                        <small>
                            <button>Olvidé mi contraseña</button>
                        </small>
                    </div>
                    <Button >Entrar</Button>
                    <Button type="secondary" onClick={(e)=>{ this.props.changeForm(e,2) }}>Crear una cuenta</Button>
                </form>
            </div>
        )
    }
}

export default LoginForm
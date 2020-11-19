import React from 'react'
import multiventas from '../../resources/images/multiventas.png'
import { Button, Checkbox, Input } from '../forms'
import '../../styles/forms.css'

class SignupForm extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        setTimeout(()=>{
            document.getElementById('wrap-login').classList.add('fade-enter-active')
        },500)
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
                    <div className="w-full mb-2">
                        <Checkbox name="terms">Acepto los términos y condiciones de uso</Checkbox>
                        <Checkbox name="privacy">He leído el aviso de privacidad</Checkbox>
                    </div>
                    <Button >Crear cuenta gratis</Button>
                    <Button type="secondary" onClick={(e)=>{ this.props.changeForm(e,1) }}>Ya tengo una cuenta</Button>
                </form>
            </div>
        )
    }

}

export default SignupForm
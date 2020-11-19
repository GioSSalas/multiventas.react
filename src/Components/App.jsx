import React from 'react'

import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import {appConfig} from '../firebaseConfig'
import { Provider } from 'react-redux';

import generateStore from '../redux-app/store'
import Login from './Views.jsx/Login';
import '../multiventas.css'

class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            
        }

    }

    componentDidMount(){
        window.document.title="Multiventas TPV"
    }

    render(){
        return(
            <FirebaseAuthProvider firebase={firebase} {...appConfig}>
                <Provider store={generateStore()}>
                    <IfFirebaseUnAuthed>
                        <Login></Login>
                    </IfFirebaseUnAuthed>
                    <IfFirebaseAuthed></IfFirebaseAuthed>
                </Provider>
            </FirebaseAuthProvider>
        )
    }

}

export default App
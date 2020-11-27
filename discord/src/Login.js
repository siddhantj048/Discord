import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        //idek
        auth.signInWithPopup(provider)
            .catch((error) => alert(error.message));
    };
    return ( <
        div className = "login" >
        <
        div className = "login_logo" >
        <
        img src = "https://th.bing.com/th/id/OIP.zDYsd2MiyCgU-Qsb0mLCYAHaHa?pid=Api&rs=1"
        alt = "" / >
        <
        /div> <
        button onClick = { signIn } > Sign In < /button> <
        /div>
    );
}

export default Login
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const clickHandler = (e) => {
        e.preventDefault();
        
    }
   return (
   <div class=" notification is-primary box">
        <form>
            <input value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder="email"></input>
            <input value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder="password"></input>
                    <button onClick={clickHandler}>Login</button>
        </form>
    </div>
    )
};

export default Login;
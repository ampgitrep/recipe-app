import { useState } from "react";
import { Container, Columns } from "react-bulma-components"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const clickHandler = (e) => {
        e.preventDefault();
        console.log(email, password)
    }
    return (
        
            <Container class="box has-background-primary-light is-pulled-right">
                <Columns>
                <Columns.Column class="title has-text-black pr-6">
                <p>Login</p>
                </Columns.Column>
                <Columns.Column class="box  has-background-grey-light">
            <form>
                <div class="control">
                    <input value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="email"></input>
                    <input value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="password"
                    ></input>
                </div>
                <button onClick={clickHandler}>Login</button> <button onClick={clickHandler}>Register</button>
            </form>
            </Columns.Column>
            </Columns>
            </Container>

    )
};

export default Login;
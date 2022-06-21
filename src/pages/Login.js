import classes from './Login.module.css';
import { useNavigate } from "react-router-dom";

function LoginPage(){

    const history = useNavigate();

    function handleClick() {
      history("/calculate");
    }

    return(
         <form className={classes.login}>
            <input type="email" placeholder="Email" required/> <br /> <br />
            <input type="password" required placeholder="Password" /> <br /> <br />
            <button onClick={handleClick}>Login</button>
        </form>
    );
}

export default LoginPage;
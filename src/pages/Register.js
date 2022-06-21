import classes from './Register.module.css';

function RegisterPage(){

    return(
        <form className={classes.register}>
            <input type="email" required placeholder="Email" /> <br /> <br />
            <input type="text" required placeholder="Full Name" /> <br /> <br />
            <input type="password" required placeholder="Password" /> <br /> <br />
            <button>Register</button>
        </form>
    );
}

export default RegisterPage;
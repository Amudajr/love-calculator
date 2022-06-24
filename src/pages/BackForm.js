import classes from './BackForm.module.css';
import cover from './Card.module.css';
import twit from '../images/twitter.png';
import face from '../images/facebook.png';
import google from '../images/google.png';

import LoginPage from './Login';
import RegisterPage from './Register';

function BackFormPage(){

    return(
    <section className={classes.container}>
        <h1 className= {classes.alonehead} >LOVE IS A BEAUTIFUL THING THEY SAID 😍❤️</h1>
       <div className ={cover.card}>
            <h2 className={cover.titlehead}>LOGIN | REGISTRATION</h2>
            <div className={cover.line1}></div>
            <div className={cover.ops}>
                <ul>
                    <li>
                        <img src={twit} alt='loading' />
                        <a href='/'>Sign in with twitter</a>  &nbsp;  &nbsp;  &nbsp; 
                    </li>
                    <li>
                        <img src={face} alt='loading' />
                        <a href='/'>Sign in with facebook</a> &nbsp; &nbsp; &nbsp; 
                    </li>
                    <li>
                        <img src={google} alt='loading' />
                        <a href='/'>Sign in with google+</a> &nbsp; &nbsp; &nbsp; 
                    </li>
                </ul>
            </div>
            <div className={cover.line1}></div><br />
            <div className={cover.login}>
                <LoginPage /> 
            </div>
            <div className={cover.register}>
                <RegisterPage />
            </div>
            <div className={classes.line2}></div><br /> <br />
            <div className={cover.line1}></div> 
            <p>
                forgot password? click <a href="/">here</a>
            </p>
        </div>
        <label>© 2022. All rights reserved | Design by Amuda Jnr.</label>
    </section>
    );
}

export default BackFormPage;
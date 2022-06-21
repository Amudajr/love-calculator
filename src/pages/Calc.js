import React from 'react';
import cover from './BackForm.module.css';
import card from './Card.module.css';
import tin from './Calc.module.css';

function Calc({onCheckclick, name}){
    return(
        <section className={cover.container}>
            <div className={card.card}>
                <div className={tin.bin}>
                    <h1>TEST YOUR LOVE</h1>
                    <div className={card.line1}></div><br />
                    <input type="text" placeholder="Your Name" required /> &nbsp; &nbsp; &nbsp;
                    <input type="text" placeholder="Your Patner Name" required /> <br /> <br /> <br />
                    <button onClick={ onCheckclick}>Check</button> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                    <button>Logout</button><br /><br />
                    <div className={card.line1}></div>
                    <p>{name}</p>
                </div>
            </div>
        </section>
    );

}

export default Calc;
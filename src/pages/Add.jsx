import React, { useState } from 'react';
import styles from './add.module.scss' 
import NumericKeyPad from './NumericKeyPad';

const Add = () => {

    const getRandomNumber = ()=>{
        return Math.floor(Math.random() * maxNumber);
    }
    const [maxNumber, setMaxNumber] = useState(10);
    const [num1, setNum1] = useState(getRandomNumber);
    const [num2, setNum2] = useState(getRandomNumber);
    const [userAnswer, setUserAnswer] = useState('');
    const [message, setMessage] = useState('');

    const checkAnswer = () => {
        const correctAnswer = num1 + num2;
        if (parseInt(userAnswer) === correctAnswer) {
            setMessage('Good job!');
            setNum1(getRandomNumber);
            setNum2(getRandomNumber);
            setUserAnswer('');
        } else {
            setMessage('Try again!');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h2>Let's add</h2>
            <div className={styles.problem}>
                {num1} + {num2} = ?
                <input className='p-2 m-2 border border-2 rounded w-25'
                type="number"
                inputMode='numeric'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                />
            </div>
            <div className='pb-3'>
                <button onClick={checkAnswer}>Check</button>
            </div>
            <div className="message">{message}</div>
            <div className='col-6 col-xs-5 col-sm-5 col-md-3 col-lg-2 col-xl-2'> 
                <NumericKeyPad keyPadValue={userAnswer} setKeyPadValue={setUserAnswer}/>
            </div>
        </div>
    );
};

export default Add;
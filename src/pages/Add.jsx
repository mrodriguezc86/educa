import React, { useState } from 'react';
import styles from './add.module.scss' 

const Add = () => {

    const getRandomNumber = ()=>{
        return Math.floor(Math.random() * maxNumber);
    }
    const [maxNumber, setMaxNumber] = useState(10);
    const [num1, setNum1] = useState(getRandomNumber);
    const [num2, setNum2] = useState(getRandomNumber);
    const [userAnswer, setUserAnswer] = useState('');
    const [message, setMessage] = useState('');

    const buttons = [[1, 2, 3], [4, 5, 6], [7, 8, 9],[null, 0, 'clear']];

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

    const keyPressed = (key)=>{
        if (key === 'clear') {
            setUserAnswer(userAnswer.slice(0,-1));
        } else if (key !== null) {
            setUserAnswer(prev => prev + key);
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h2>Let's add</h2>
            <div className="problem">
                {num1} + {num2} = ?
            </div>
            <div>
            <input className='p-2 m-2 border border-2 rounded w-25'
                type="number"
                inputMode='numeric'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={checkAnswer}>Check</button>
            </div>
            <div className="message">{message}</div>
            <div className='col-6 col-xs-5 col-sm-5 col-md-3 col-lg-2 col-xl-2'> 
                {buttons.map((row, index) =>{
                    return <div key={index} className={`row align-items-center`}>
                        {row.map((key, index) => (
                            <div key={`${key}-${index}`} className="col-4 g-0">
                                {key!==null && 
                                    <button 
                                        aria-label={`Key ${key}`}
                                        className={`btn border rounded ${styles.keyboardKey} w-100 py-3`}
                                        onClick={()=>keyPressed(key)}>
                                        {key}
                                    </button>
                                }
                            </div>
                        ))}
                        </div>
                })}
            </div>
        </div>
    );
};

export default Add;
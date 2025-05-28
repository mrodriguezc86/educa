import React, { useEffect, useState } from 'react';
import styles from './numericKeyPad.module.scss';

function NumericKeyPad({keyPadValue, setKeyPadValue}) {

    //const [keyPadValue, setKeyPadValue] = useState('');

    const buttons = [[1, 2, 3], [4, 5, 6], [7, 8, 9],['Clear', 0, '←']];

    const changeValue = (key)=>{
        if (key === 'Clear') {
            setKeyPadValue('');
        }else if(key === '←'){
            setKeyPadValue(keyPadValue.slice(0,-1));

        } else if (key !== null) {
            setKeyPadValue(prev => prev + key);
        }
    }

    return (
        <>
        {buttons.map((row, index) =>{
                        return <div key={index} className={`row align-items-center`}>
                            {row.map((key, index) => (
                                <div key={`${key}-${index}`} className="col-4 g-0">
                                    {key!==null && 
                                        <button 
                                            aria-label={`Key ${key}`}
                                            className={`btn border rounded ${styles.keyboardKey} w-100 py-3`}
                                            onClick={()=>changeValue(key)}>
                                            {key}
                                        </button>
                                    }
                                </div>
                            ))}
                            </div>
                    })}
        </>
    );
}

export default NumericKeyPad;

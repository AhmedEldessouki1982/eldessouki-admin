import React from 'react';
import './Featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Featured () {
    let theValue = 30;
    return (
        <div className ='feactured__container'>
            <span> Progress </span>
            <CircularProgressbar
            className='circular__bar'
            strokeWidth = {5}
            value={theValue}
            text = {`${theValue}%`}
            background = {true} />
            
            <div className='feactured__container__data'>
                <div className='feactured__container__item'>
                    <span>Target</span>
                    <span>{`${100}k`}</span>
                </div>

                <div className='feactured__container__item'>
                    <span>Last Day</span>
                    <span>{`${100}k`}</span>
                </div>

                <div className='feactured__container__item'>
                    <span>Last Month</span>
                    <span>{`${100}k`}</span>
                </div>
                
            </div>
        </div>
    )
}
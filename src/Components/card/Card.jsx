import React from 'react';
import './Card.scss';


export default function Cards (props) {
    return (
        <>
            <div className ='card__container' style = { {backgroundColor: props.color } } >
                <div className ='card__container_left' >
                    <span>{props.title}</span>
                    <span>21312</span>
                    <span>{props.link}</span>
                </div>

                <div className ='card__container_right'>
                    <span>{`${20} %`}</span>

                </div>
            </div>
        </>
    )
}
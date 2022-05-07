import React from 'react';
import './Card.scss';


export default function Cards (props) {
    return (
        <>
            <div className='card__container'>
                <div className='card__container_left'>
                    <span>USERS</span>
                    <span>21312</span>
                    <span>See all users</span>
                </div>

                <div className='card__container_right'>
                    <span>{`${20} %`}</span>

                </div>
            </div>
        </>
    )
}
import React from 'react';
import './home.scss';
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import Card from '../../Components/card/Card';
import { CardData } from '../../utils/CardsDataSelection';

export default function Home () {
    return (
        <>
            <div className='Home__Container'>
                <Sidebar />
                <div className='canvas'>

                    <Navbar />

                    <div className='Home__Container_cards'>
                        
                        {
                            console.log(CardData)
                        }

                    </div>
                                           
                </div>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        </>
        
    )
}
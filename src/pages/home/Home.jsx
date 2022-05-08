import React from 'react';
import './home.scss';
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import Card from '../../Components/card/Card';
import { CardData } from '../../utils/CardsDataSelection';
import Chart from '../../Components/chart/Chart';
import Featured from '../../Components/featured/Featured';

export default function Home () {
    return (
        <>
            <div className='Home__Container'>
                <Sidebar />
                <div className='canvas__container'>
                    <Navbar />
                    <div className='Home__Container_cards'>
                        {
                            CardData.map (
                                (data,i) => (
                                    <Card
                                    key = {i}
                                    title = {data.title}
                                    link = {data.link}
                                    color = {data.color}
                                    />
                                )
                            )
                        }
                    </div>

                    <div className= 'canvas__bottom'>
                        <Featured/>
                        <Chart/>
                    </div>
                    
                </div>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        </>
        
    )
}
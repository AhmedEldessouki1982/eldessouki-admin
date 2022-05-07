import React from 'react';
import './Sidebar.scss';
import { ListedItems } from '../../utils/SideBarItems';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sidebar () {
    return (
        <div className='sidebar__container'>
        
            <h1 className='logo'>{`</> eldessouki`}</h1>
            
            <ul className='list'>
                <p className = 'title'>main</p>

                    {
                        ListedItems[0].map (
                            item => (
                                <li key = {item.id}>
                                    <FontAwesomeIcon  icon={item.icon} />
                                    <span >{item.title}</span>
                                </li>
                            )                       
                        )
                    }

                <p className = 'title'>service</p>
                    {
                        ListedItems[1].map (
                            item => (
                                <li key = {item.id}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span >{item.title}</span>
                                </li>
                            )                       
                        )
                    }
                <p className = 'title'>user</p>
                    {
                        ListedItems[2].map (
                            item => (
                                <li key = {item.id}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span >{item.title}</span>
                                </li>
                            )                       
                        )
                    }
            </ul>
        </div>
    )
}
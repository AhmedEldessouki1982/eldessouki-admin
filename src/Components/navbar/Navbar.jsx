import React from 'react';
import './Navbar.scss';
import { faSearch, faBell, faMessage, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Navbar () {
    return (
        <div className='navbar__Container'>
            <div className = 'Navbar__search'>
                <input className = 'search__input' type = 'text' placeholder=' Search....'></input>
                <FontAwesomeIcon className = 'search__icon' icon={faSearch} />
            </div>

            <div className='Navbar__icons'>
                <span className = 'Navbar__icons__childs'>
                    <FontAwesomeIcon  icon={faBell} />
                    <div>{50}</div>
                </span>

                <span className = 'Navbar__icons__childs'>
                    <FontAwesomeIcon  icon={faMessage} />
                    <div>{5}</div>
                </span>

                <span className = 'Navbar__icons__childs'>
                    <FontAwesomeIcon  icon={faUserNinja} />
                </span>
               
            </div>
        </div>
    )
}
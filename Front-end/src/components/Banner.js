import '../styles/Banner.css'
import logo from '../assets/logo_ing.png'
import React, { Component } from 'react';
import Cart from '../components/Cart';

function Banner() {
    const title = 'Gérer les utilisateurs';
    return (
        <div>
            <div>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{ title }</h1>
            </div>
            <a href="/creer" className="button" id="creer">Créer</a>  
            <button className="search">Recherché</button>
            <input className="bar" type="search" id="site-search" name="q" aria-label="Search through site content"></input>
            <Cart/>
        </div>
    )
}


export default Banner
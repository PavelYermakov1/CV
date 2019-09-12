import './Footer.css';
import React from 'react';

export default (props) => (
    <footer >
        <div className='foot-conteiner'>
            <span className='footer-description'>Created by Pavel Yermakov. All rights reserved.
            </span>
            <div className='footer-icons'>
                <a href='https://vk.com/id17677932' className='icon-link'>
                <img src='vk.png' alt='1' />  
                </a>
                <a href='https://github.com/PavelYermakov1' className='icon-link'>
                <img src='github.png' alt='1' />  
                </a>
                <a href='https://mail.ru/' className='icon-link'>
                <img src='mail.png' alt='1' className='icon-link' />  
                </a>
            </div>
        </div>
    </footer>
)
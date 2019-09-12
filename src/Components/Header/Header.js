import './Header.css';
import React from 'react';

export default (props) => (
    <header className='header'>
        <div className='header-conteiner'>
            <div className='menu-list'>
                <nav>
                    <a href='#contacts'>CONTACTS</a>
                    <a href='#skills'>SKILLS</a>
                    <a href='#codeExamples'>CODE EXAMPLES</a>
                    <a href='#experience'>EXPERIENCE</a>
                    <a href='#education'>EDUCATION</a>
                    <a href='#englishLevel'>ENGLISH LEVEL</a>
                </nav>
            </div>
            <div className='head-info'>
                <div className='description'>
                    <h1 className='name'>Pavel Yermakov</h1>
                    <p className='description-small'>Junior Front-End Developer</p>
                </div>
                <div className='head-info-button'>
                    <a href='https://vk.com/id17677932' target='blank'>
                        <button className='info-button'>Write Me</button>
                    </a>
                </div>
            </div>

        </div>
      
    </header>
)
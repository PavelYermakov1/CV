import './Main.css';
import React from 'react';

export default (props) => (
    <main>
        <section className='info'>
            <div className='conteiner'>
                <div className='avatar'></div>
                <div className='about-me'>
                    <h3 className='about-title'>About me</h3>
                    <p className='summary'>I am a beginner web-developer, passionately interested in programming and modern technologies. I’m always eager to learn new things. I can work independently as well as a team member, write clean, reusable and testable code. Looking for a job in a company where I can evolve as a frontend-developer.</p>
                </div>
            </div>
        </section>
        <section className='contacts' id='contacts'>
            <div className='conteiner'>
                <h3 className='section-title contacts-title'>Contacts:</h3>
                <ul className='contacts-list'>
                    <li className='contacts-item'>
                        <a href=' #' className='contacts-link'>
                            <img src='building.png' alt='1' />
                            Minsk
                        </a>
                    </li>
                    <li className='contacts-item'>
                        <a href='callto:+375293826490' className='contacts-link'>
                        <img src='phone.png' alt='1' /> 
                            +375 29 382 64 90
                        </a>
                    </li>
                    <li className='contacts-item'>
                        <a href='https://vk.com/id17677932' className='contacts-link'>
                        <img src='vk.png' alt='1' /> 
                            https://vk.com/id17677932
                        </a>
                    </li>
                    <li className='contacts-item'>
                        <a href='https://github.com/PavelYermakov1' className='contacts-link'>
                        <img src='github.png' alt='1' />  
                            https://github.com/PavelYermakov1
                        </a>
                    </li>
                    <li className='contacts-item'>
                        <a href='https://mail.ru/' className='contacts-link'>
                        <img src='mail.png' alt='1' /> 
                            pavelak137@mail.ru
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section className='skills-code' id='skills'>
            <div className='conteiner'>
                <h3 className='section-title skills-title'>Skills:</h3>
                <ul className='skills-list'>
                    <li className='skills-item'>
                        HTML5
                        <ul className='skills-item-list'>
                            <li>Studied html. I know how and when to apply the necessary tags and attributes on the page.</li>
                        </ul>
                    </li>
                    <li className='skills-item'>
                        CSS3
                        <ul className='skills-item-list'>
                            <li>Studied CSS. I can apply design methods in practice.</li>
                        </ul>
                    </li>
                    <li className='skills-item'>
                        JS (ES5 + ES6)
                        <ul className='skills-item-list'>
                            <li>Learned js programming language to create interactive website.</li>
                        </ul>
                    </li>
                    <li className='skills-item'>
                        Git
                        <ul className='skills-item-list'>
                            <li>I know how to work with the version control system Git.</li>
                        </ul>
                    </li>
                    <li className='skills-item'>
                        React
                        <ul className='skills-item-list'>
                            <li>I study the work of the react library.</li>
                        </ul>
                    </li>
                    <li className='skills-item'>
                        Team work
                        <ul className='skills-item-list'>
                            <li>I can work well both independently and in a team.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
        <section className='code-exampl' id='codeExamples'>
            <div className='conteiner'>
                <h3 className='section-title code-ex-title'>Code examples:</h3>
                <div className='code-links'>
                    <a href='https://github.com/PavelYermakov1/sudoku' target='blank'>
                        <img src='code.png' alt='1' />
                        Sudoku
                    </a>
                    <a href='https://github.com/PavelYermakov1/advanced-zeros' target='blank'>
                        <img src='code.png' alt='1' />
                        Advanced-zeros
                    </a>
                    <a href='https://github.com/PavelYermakov1/brackets' target='blank'>
                        <img src='code.png' alt='1' />
                        Brackets
                    </a>
                </div>
            </div>
        </section>
        <section className='experience' id='experience'>
            <div className='conteiner'>
                <h3 className='section-title experience-title'>Experience:</h3>
                <div className='projects'>
                    <h4 className='exp-section-subtitle'>My projects</h4>
                    <a href='https://pavelyermakov1.github.io/Homework-Hexal.-Diffculty-level-1/' className='projects-link'>
                        <img src='github.png' alt='1' /> 
                        Hexal
                    </a>
                    <a href='https://pavelyermakov1.github.io/Neutron-Mail/' className='projects-link'>
                        <img src='github.png' alt='1' /> 
                        Neutron Mail
                    </a>
                    <a href='https://PavelYermakov1.github.io/Piskel-clone/'  className='projects-link'>
                        <img src='github.png' alt='1' /> 
                        Piskel clone
                    </a>
                    <a href='https://bcj.netlify.com/'  className='projects-link'>
                        <img src='github.png' alt='1' /> 
                        Film directors of Belarus
                    </a>
                </div>
            </div>
        </section>
        <section className='education' id='education'>
            <div className='conteiner'>
                <h3 className='section-title education-title'>Education:</h3>
                <ul className ='education-tipes'>
                    <li>Belarusian National Technical University 2010 - 2015</li>
                    <li>The Rolling Scopes School 2019</li>
                </ul>
                <a href='https://app.rs.school/certificate/u98yveif' className='education-link'>
                    <img src='certificat.jpg' alt='1' className='education-certificat' />
                </a>   
            </div>
        </section>
        <section className='english' id='englishLevel'>
            <div className='conteiner'>
                <h3 className='section-title english-title'>English level:</h3>
                <p className='english-text'>I studied English at school and university and I continue to improve my skills almost every day. My current level of English is Pre-Intermediate (A2).</p>
            </div>
        </section>
    </main>
)
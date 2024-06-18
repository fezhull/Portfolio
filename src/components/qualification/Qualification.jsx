import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey
        </span>
       
       <div className='qualification__container container'>
       <div className='qualification__tabs'>
        <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex': 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification__icon'></i> {""} Education 
        </div>

        <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex': 'qualification__button button--flex'}onClick={() => toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification__icon'></i> {""} View Experience
        </div>
       </div>

       <div className='qualification__sections'>
        <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Full Stack Developer</h3>
                    <span className='qualification__subtitle'>Alx - Institute</span>
                    <div className='qualification__calender'>
                        <i className='uil uil-calander-alt'></i> 2023 - Present
                    </div>
                </div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

            </div>

            <div className='qualification__data'>
                <div></div>
                
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

                <div>
                    <h3 className='qualification__title'>web Developer</h3>
                    <span className='qualification__subtitle'>Eduonix - Institute</span>
                    <div className='qualification__calender'>
                        <i className='uil uil-calander-alt'></i>  2018 - 2019
                    </div>
                </div>               
            </div>

            <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'> Mobile Developer </h3>
                    <span className='qualification__subtitle'>Udemy - Institute</span>
                    <div className='qualification__calender'>
                        <i className='uil uil-calander-alt'></i> 2019 - 2021
                    </div>
                </div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

            </div>

            <div className='qualification__data'>
                <div></div>
                
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

                <div>
                    <h3 className='qualification__title'>Information and Technology</h3>
                    <span className='qualification__subtitle'>Meru University of Science and Technology</span>
                    <div className='qualification__calender'>
                        <i className='uil uil-calander-alt'></i> 2012 - 2017
                    </div>
                </div>               
            </div>
        </div>
        <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Mobile Developer</h3>
                    <span className='qualification__subtitle'>Grise Systems Solutions - Kenya</span>
                    <div className='qualification__calender'>
                        <i className='uil uil-calander-alt'></i> 2023 - Present
                    </div>
                </div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
            </div>
            <div className='qualification__data'>
                <div></div>
                
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

                <div>
                    <h3 className='qualification__title'>Frontend Developer</h3>
                    <span className='qualification__subtitle'>Vertex-Hub - Kenya</span>
                    <div className='qualification__calender'>
                        <i className='uil uil-calander-alt'></i> 2020 - 2021
                    </div>
                </div>  
                             
            </div>
            
            <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Freelancer Mobile Developer</h3>
                    <span className='qualification__subtitle'>Freelancer - Kenya</span>
                    <div className='qualification__calender'>
                        <i className='uil uil-calander-alt'></i> 2021 - 2022
                    </div>
                </div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
            </div>
            <div className='qualification__data'>
                <div></div>
                
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>

                <div>
                    <h3 className='qualification__title'>Intern Developer</h3>
                    <span className='qualification__subtitle'>IHub and CCHub company - Kenya</span>
                    <div className='qualification__calender'>
                        <i className='uil uil-calander-alt'></i> 2017 - 2018
                    </div>
                </div>  
                             
            </div>
            <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Web Developer</h3>
                    <span className='qualification__subtitle'>Deep Africa Limited - Kenya</span>
                    <div className='qualification__calender'>
                        <i className='uil uil-calander-alt'></i> 2018 - 2020
                    </div>
                </div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
            </div>
        </div>
       </div>
       </div>
    </section>
  )
}


export default Qualification
import React from'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
    {
        id:1,
        image:Image1,
        title: "Mobile Development",
        description:"Services with more than 6 years of experience. Providing quality work,modern and moible-ready application that will help you reach all of your marketing. "
    },
    {
        id:2,
        image:Image2,
        title: "Frontend Development",
        description:"Services with more than 6 years of experience. Providing quality work to clients and companies. "
    },
    {
        id:3,
        image:Image3,
        title: "Api Development",
        description:"Devloping a highly secure, fast and Services with more than 6 years of experience. Providing quality work to clients and companies. "
    },
]

const Services = () => {
  
  return (
    <section className='services container section' id='services'>
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I Offer</span>

        <div className='services__container grid'>
            {data.map(({id, image, title, description}) => {
                return(
                    <div className='services__card' key={id}>
                        <img src={image} alt="" className='services__img'/>
                        <h3 className='services__title'>{title}</h3>
                        <p className='services__description'>{description}</p>

                    </div>
                )
            })}

        </div>
        </section>
  );
};
export default Services
import React from'react';
import "./services.css";
import Image1 from "../../assets/service-1.png";
import Image2 from "../../assets/service-2.png";
import Image3 from "../../assets/service-3.png";

const data = [
    {
        id:1,
        image:Image1,
        title: "Mobile Development",
        description:"With over three years of experience, I specialize in delivering high-quality, modern, and mobile-ready applications that effectively support your marketing objectives. "
    },
    {
        id:2,
        image:Image2,
        title: "Frontend Development",
        description:"I offer over four years of expertise in developing modern, mobile-ready websites with intuitive interfaces and delightful user experiences. "
    },
    {
        id:3,
        image:Image3,
        title: "Api Development",
        description:"Experienced API Developer with 3+ years of expertise crafting secure, and scalable REST and GraphQL APIs, committed to delivering high-quality solutions that meet diverse client and organizational needs efficiently. "
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
// import "./work.css";
// import Data from './Data';
// import React, { useState } from "react";
// //import Works from './Works';

// const Work = () => {
//   const [items, setItems] = useState(Data);
//   const filterItem = (categoryItem)=>{
//     const updateItems = Data.filter((curElem)=>{
//       return curElem.category === categoryItem;
//     });
//     setItems(updateItems);
//   }
//   return (
//     <section className='work container section' id='portfolio'>
//         <h2 className='section__title'>Portfolio</h2>
//         <span className='section__subtitle'>Most Recent Works</span>

//         <div className='work__filters'>
//           <span className='work__item'onClick={()=>setItems (Data)}>Everything</span>
//           <span className='work__item'onClick={()=>filterItem ("Mobile Apps")}>Mobile Apps</span>
//           <span className='work__item'onClick={()=>filterItem ("Web Apps")}>Web Apps</span>
//           <span className='work__item'onClick={()=>filterItem ("Api Apps")}>Api Apps</span>
//           <span className='work__item'onClick={()=>filterItem ("Everything")}>Everything</span>
//         </div>

//         <div className='work__container grid'>
//           {items.map((elem)=>{
//             const{id, image, title, category} = elem;
//             return(
//               <div className='work__card' key={id}>
//                 <div className='work__thumbnail'>
//                   <img src={image} alt=""className='work__img' />
//                   <div className='work__mask'></div>
//                   </div>
//                   <span className='work__category'>{category}</span>
//                   <h3 className='work__title'>{title}</h3>
//                   <a href="#" className='work__button'>
//                     <i className='icon-link work__button-icon'></i>
//                   </a>
//                 </div>
//             )
//           })}

//         </div>

//     </section>
//   )
// }

// export default Work
import React from "react";
import "./work.css";
function Card(props) {
 
  
 return (
 
       <div className='work__card'>
        <div className='work__thumbnail'>
         <img src={props.imgsrc} alt="" className="work__img" />
         <div className='work__mask'></div>
</div>
           <span className="work__category">{props.title}</span>
           <h3 className="work__title">{props.sname}</h3>
           <a href={props.link}card target="work__button">
           <i className='icon-link work__button-icon'>
             <button className="button">View Demo </button></i>

           </a>
         </div>


   


)}
export default Card;
  
   
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';

import Card from './components/work/Work';

// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';




const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <>
      
      <section className='work container section' id='portfolio'>
         <h2 className='section__title'>Portfolio</h2>
         <span className='section__subtitle'>Most Recent Works</span>
         
      
</section>
      <div className='work__container grid'>
      <Card
      imgsrc={require("./assets/work3.png" )}
      title=" E-commerce website"
      sname="Reactjs Web App"
      link="https://www.netflix.com/in/"
    />
    <Card
      imgsrc={require("./assets/books.png" )}
      title=" E-commerce Bookstore"
      sname="Reactjs Web App"
      link="https://www.youtube.com/watch?v=Czr1pspCsjc"
    />
      <Card
      imgsrc={require("./assets/wworkk.png" )}
      title="Flutter $ Firebase Authenication App"
      sname="Flutter Mobile App"
      link="https://www.netflix.com/in/"
    />
    
    <Card
      imgsrc={require("./assets/rental.png" )}
      title=" Rental App"
      sname="Flutter Rental Mobile App"
      link="https://www.youtube.com/watch?v=Czr1pspCsjc"
    />
    
     <Card
      imgsrc={require("./assets/tow.png" )}
      title=" Food App & Chefs Bookings"
      sname="Flutter Mobile App"
      link="https://www.netflix.com/in/"
    />
     <Card
      imgsrc={require("./assets/img.png" )}
      title=" Flutter Ecommerce Car Collection"
      sname="Flutter Mobile App"
      link="https://www.netflix.com/in/"
    />
     <Card
      imgsrc={require("./assets/cash wallet1 (1).png" )}
      title=" Cash wallet"
      sname="Flutter Mobile App"
      link="https://www.netflix.com/in/"
    />
     
    
</div>
</>
   
      {/* <Testimonials/> */}
      <Contact/>
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  )
}

export default App;

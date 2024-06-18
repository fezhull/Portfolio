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
      title=" Digital Fashion Outlet."
      sname="React.js web application"
      link="https://reactjs-clothestores.netlify.app"
    />
    <Card
      imgsrc={require("./assets/books.png" )}
      title=" Online Bookshop"
      sname="React.js web application"
      link="https://reactjs-bookstore.netlify.app"
    />
      <Card
      imgsrc={require("./assets/wworkk.png" )}
      title="Firebase authentication"
      sname="Flutter application"
      link="https://flutter-firebase-auth.netlify.app/"
    />
    
    <Card
      imgsrc={require("./assets/rental.png" )}
      title=" Leasing Application"
      sname="Flutter application"
      link="https://flutter-rental-app.netlify.app"
    />
    
     <Card
      imgsrc={require("./assets/tow.png" )}
      title=" food ordering and chef bookings App"
      sname="Flutter application"
      link="https://flutter-chefs-booking.netlify.app"
    />
     <Card
      imgsrc={require("./assets/img.png" )}
      title=" Vintage car collection app"
      sname="Flutter application"
      link="https://flutter-vintage-car-collection.netlify.app"
    />
     <Card
      imgsrc={require("./assets/cash wallet1 (1).png" )}
      title=" Loan monitoring tool"
      sname="Flutter application"
      link="https://flutter-loan-tracker.netlify.app"
    />
     <Card
      imgsrc={require("./assets/moneyw.png" )}
      title=" Expense monitoring application"
      sname="Flutter application"
      link="https://flutter-expensetracker-tracker.netlify.app"
    />
    <Card
      imgsrc={require("./assets/auth.png" )}
      title="Firebase for multi-authentication"
      sname="Flutter application"
      link="https://google-github-signup.netlify.app"
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

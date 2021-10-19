import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import Greetings from './Greetings/Greetings';
import './Home.css'
import Services from './Services/Services';
const Home = () => {
     return (
          <>
               <Header></Header>
               <Banner></Banner>
               <Feature></Feature>
               <Greetings></Greetings>
               <Services></Services>
               <Footer></Footer>
          </>
     );
};

export default Home;
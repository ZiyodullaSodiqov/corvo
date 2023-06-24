import React from 'react';
import Nav from './components/Navbar/Nav';
import Header from './components/Header/Head';
import Image from './components/Image/Img';
import Contact from './components/Contact/Us';
import Footer from './components/Footer/Footer'

  const App = () => { 
      return(
        <React.Fragment>
            <Nav />
            <Header />
            <Image />
            <Contact />
            <Footer />
        </React.Fragment>
      );
  };

export default App;
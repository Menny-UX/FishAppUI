import React from 'react';
import './home.css';
import Header  from '../../components/home/header';
import Footer  from '../../components/home/footer';
import About  from '../../components/home/about';
import Benifits  from '../../components/home/benifits';
import Contact  from '../../components/home/contact';

const HomePage = () => {
    return ( 
        <div>
            <Header />
            <div className="home__sections" >
                <About id="about" />
                <Benifits id="benifits" />
                <Contact id="contact" />
            </div>
            <Footer />
        </div>
     );
}
 
export default HomePage;
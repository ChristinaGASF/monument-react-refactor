import React from 'react';
import Gallery from './gallery/gallery'
import Archive from './archive/archive'
import About from './about/about';
import Header from './header/header';
import Contact from './contact/contact';

const index = () => {
    return (
        <div>
            <Header />
            <Archive />
            <About />
            <Gallery />
            <Contact />
        </div>
    )
}

export default index;
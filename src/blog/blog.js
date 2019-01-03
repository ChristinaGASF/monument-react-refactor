import React from 'react';
import Post from './post/post'
import Header from './header/header'
import Contact from './contact/contact';

const blog = () => {
    return (
        <div>
            <Header />
            <Post />
            <Contact />
        </div>
    )
}

export default blog;
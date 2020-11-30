import React from 'react'
import Header from '../components/Header'
import './Blog.css'
import Profile from '../components/Profile';
import MultilineTextFields from '../components/Form'
import Quote from '../components/Quote'

function Blog() {
    return (
        <div className="blog-body">
            <Header />
            <Quote />
            HELLO SHEEP
            <Profile />
            <MultilineTextFields />
        </div>
    )
}

export default Blog

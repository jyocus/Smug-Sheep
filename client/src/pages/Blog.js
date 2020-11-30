import React from 'react'
import Header from '../components/Header'
import './Blog.css'
import Profile from '../components/Profile';
import MultilineTextFields from '../components/Form'

function Blog() {
    return (
        <div className="blog-body">
            <Header />
            HELLO SHEEP
            <Profile />
            <MultilineTextFields />
        </div>
    )
}

export default Blog

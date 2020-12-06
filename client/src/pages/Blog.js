import React from 'react';
// Components
import Header from '../components/Header'
import Profile from '../components/Profile';
import MultilineTextFields from '../components/Form';
import MainFeaturedPost from '../components/MainFeaturedPost';
import './Blog.css'
// Material UI
import Container from '@material-ui/core/Container';
// ParticlesBg
import ParticlesBg from "particles-bg";

const mainFeaturedPost = {
    title: "So what's the good news?",
    description:
      "Each day we have the chance to spread positivity. Here we provide the space to share those stories...",
};

function Blog() {
    return ( 
        <Container >
            <div className="blog-body">
                <ParticlesBg type="lines" color="#ffb4da" bg={true} />
                <Header />
                <Profile />
                <MultilineTextFields />
                <MainFeaturedPost post={mainFeaturedPost} />
            </div>
        </Container>
    )
};

export default Blog

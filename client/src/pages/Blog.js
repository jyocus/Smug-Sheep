import React from 'react'
import Header from '../components/Header'
import './Blog.css'
import Profile from '../components/Profile';
import MultilineTextFields from '../components/Form'
import Container from '@material-ui/core/Container';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

function Blog() {
    return (
        <Container maxWidth="lg">
            <div className="blog-body">
                <Header />
                <Profile />
                <MultilineTextFields />
                <MainFeaturedPost post={mainFeaturedPost} />
            </div>
        </Container>
    )
}

export default Blog

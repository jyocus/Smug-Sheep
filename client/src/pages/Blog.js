import React from 'react'
import Header from '../components/Header'
import './Blog.css'
import Profile from '../components/Profile';
import MultilineTextFields from '../components/Form'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import ParticlesBg from "particles-bg";

const mainFeaturedPost = {
    title: "So what's the good news?",
    description:
      "Each day we have the chance to spread positivity. Here we provide the space to share those stories...",
    // image: 'https://source.unsplash.com/random',
    // imgText: 'main image description',
    // linkText: 'Continue reading…',
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        position: 'fixed',
        height: '100vh'
      }
    },
  }));  



function Blog() {
    const classes = useStyles();
    return (
        
        <Container >
            
            <div className="blog-body">
                {/* <div className='bubbles'> */}
                <ParticlesBg canvasClassName={'fullTest'} className={'fullTest'} type="lines" color="#ffb4da" bg={true} />
                {/* </div> */}
                <Header />
                <Profile />
                <MultilineTextFields />
                <MainFeaturedPost post={mainFeaturedPost} />
                {/* </ParticlesBg> */}
                
            </div>
            {/* </ParticlesBg > */}
        </Container>
    )
}

export default Blog

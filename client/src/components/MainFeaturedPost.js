import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Image from 'material-ui-image';
// import SheepImage from '../components/SheepImage'
import QuoteCard from '../components/QuoteCard';



const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  // quoteContent: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   // display: 'block', 
  // }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{  }}>
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
      {/* <Image
      src="http://loremflickr.com/300/200"
      /> */}
      <div className={classes.overlay} />
      <Grid container direction="row">
        
        <Grid>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            {/* <Grid item md={12}> */}
            <QuoteCard />
            {/* </Grid> */}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
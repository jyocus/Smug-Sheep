import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Bleetify from "bleetify"

//Bleetify!
const blogText = " YOUR RECENT BLEETS"
const bleet = Bleetify.bleet(blogText, 75);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 350,
    // maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    // marginRight: "50px",
    borderRadius: '10px',
    paddingRight: "10px",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  header: {
    // fontWeight: 'bold',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontFamily: 'impact',
    letterSpacing: '2px'
  }
}));

function renderRow(props) {
  const { index, style } = props;
  const item = props.data[props.index];
  return (
    <Grid>
      <ListItem button style={style} key={index}>
        <Grid item md={2}>
        <ListItemText primary={`${item.title}`} />
        </Grid>
        <Grid item md={10}>
        <ListItemText primary={`${item.body}`} />
        </Grid>
      </ListItem>
    </Grid>
    
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList(props) {

  const getBleet = bleet;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>{getBleet}</header>
      
      <FixedSizeList itemData={props.posts} height={300} width={"100%"} itemSize={120} itemCount={props.posts.length}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

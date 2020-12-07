import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
//Bleetify!
import Bleetify from "bleetify"
const blogText = " THE FLOCK'S BLEETS"
const bleet = Bleetify.bleet(blogText, 75);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 350,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    paddingRight: "10px",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    [theme.breakpoints.only('sm')]: {
      width: '500px',
      marginLeft: '10px',
      marginTop: '10px'
    },
    [theme.breakpoints.only('xs')]: {
      width: '450px',
      marginLeft: '10px',
      marginTop: '10px',
    },
  },
  header: {
    paddingTop: '10px',
    paddingBottom: '10px',
    fontFamily: 'impact',
    letterSpacing: '2px'
  }
}));

function renderRow(props) {
  console.log('props in render row!!!', props)
  const { index, style } = props;
  const item = props.data[props.index];
  return (
    <Grid>
      <ListItem button style={style} key={index}>
        {/* LIST TITLE  */}
        <Grid item md={2}>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" style={{ color: '#FFFFFF', fontWeight: '900', paddingRight: '5px' }}>{`${item.title}`}</Typography>}
          />
        </Grid>
        {/* LIST BODY  */}
        <Grid item md={10}>
          <ListItemText primary={`${item.body}`} />
        </Grid>
      </ListItem>
    </Grid>
  );
};

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

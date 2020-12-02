import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 300,
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    marginRight: theme.spacing(3),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));

function renderRow(props) {
  const { index, style } = props;
//console.log('render row is happening!!!', props, index)
//if(props.data[index].title) {
  const item = props.data[props.index];
  console.log('EAH POST DISPALY NAME', item)
  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`${item.title}`} />
      <ListItemText primary={`${item.body}`} />
    </ListItem>
    
  );
//}
  
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList(props) {


  const classes = useStyles();
console.log('virtualized list happening!!!', props.posts.length)
  return (
    <div className={classes.root}>
      <h1> Tme to loop over db ppl!!</h1>

        {/* {renderRow} */}
        {/* {props.posts.map((singlePost) => {
          return (
            <ListItem >
              <ListItemText primary={`tom ${ 1}`} />
            </ListItem>
          )
        })} */}
      
      <FixedSizeList itemData={props.posts} height={300} width={600} itemSize={60} itemCount={props.posts.length}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

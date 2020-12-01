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
    paddingRight: "20px",
    margin: "5px"
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
    
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={300} width={600} itemSize={60} itemCount={200}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

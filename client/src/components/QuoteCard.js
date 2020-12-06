import React, {useEffect} from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// API 
import API from '../utils/API';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function QuoteCard() {
  const classes = useStyles();
  const [quotes, setQuote] = React.useState({
      quote: {},
  })
  // USE EFFECT
  useEffect(() => {
   API.getQuote().then(response => {
    console.log("QUOATEEE",response)
    setQuote({...quotes, quote: response.data[0]})
  })   
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* QUOTE  */}
        <Typography variant="h5" component="h2">
          {quotes.quote.q}
        </Typography>
        {/* AUTHOR  */}
        <Typography className={classes.pos} color="textSecondary">
          {quotes.quote.a}
        </Typography>
      </CardContent>
    </Card>
  );
};
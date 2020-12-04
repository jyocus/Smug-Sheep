import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
  const bull = <span className={classes.bullet}>•</span>;

  const [quotes, setQuote] = React.useState({
      quote: {},
  })

  useEffect(() => {
   API.getQuote().then(response => {
    console.log("QUOATEEE",response)
    setQuote({...quotes, quote: response.data[0]})
  })   
  }, [])

  console.log(quotes)
  


  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          {quotes.quote.q}
        </Typography> */}
        <Typography variant="h5" component="h2">
          {quotes.quote.q}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {quotes.quote.a}
        </Typography>
        {/* <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
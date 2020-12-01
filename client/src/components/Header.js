import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingBottom: "5px",
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header() {
  const classes = useStyles();

//Destructuring the Hook 
const {loginWithRedirect} = useAuth0();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Smug Sheep</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {/* ICON  */}
          <SearchIcon />
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <Button onClick={() => loginWithRedirect()}
        variant="outlined" 
        size="small">
          Sign up
        </Button>


      </Toolbar>
    </React.Fragment>
  );
}
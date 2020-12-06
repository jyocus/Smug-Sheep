import React from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
// Iconify
import { Icon } from '@iconify/react';
import sheepIcon from '@iconify-icons/mdi/sheep';

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
  toolBarFont: {
    fontFamily: 'impact',
    fontSize: '25px'
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
        >
          <Icon icon={sheepIcon} />
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          className={classes.toolbarTitle}
        >
          <Typography className={classes.toolBarFont} size="small">SMUG SHEEP</Typography>
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="right"
        >
          <Icon icon={sheepIcon} />
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}



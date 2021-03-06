/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { DialogContent } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import DoneIcon from '@material-ui/icons/Done';

import logo from '../img/avatar.jpg';

const useStyles = makeStyles((theme) => ({
  result: {
    fontWeight: 'bold',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1.5),
    },
  },
  content: {
    margin: theme.spacing(4),
    textAlign: 'center',
    fontSize: 'large',
  },
  pacing: {
    flexGrow: 1,
  },
  button: {
    textTransform: 'none',
    color: 'inhert',
  },
  left: {
    display: 'flex',
    justifyContent: 'left',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 7,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open, length } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={[classes.title, classes.avatar].join(' ')}>
        <DialogTitle id="simple-dialog-title">Result</DialogTitle>
        <Avatar className={classes.large} src={logo} />
      </div>
      <DialogContent className={classes.content}>
        <Typography className={classes.result} variant="h1" color="primary"> VICTORY! </Typography>
        <br />
        <div>
          <Typography variant="h6">
            Diamond League
          </Typography>
        </div>
        <BorderLinearProgress variant="determinate" value={length} />
        <br />
        <Typography className={classes.left} variant="body1">
          Avarge Coding Speed:
          {' '}
          {length}
          {' '}
          characters per minute.
        </Typography>
        <Typography className={classes.left} variant="body1">
          Current Rank:
          {' '}
          {145 - length * 2}
          th place.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button className={classes.button} variant="contained" onClick={handleClose} color="primary">
          Play Again
        </Button>
        <Link to="/compare">
          <Button className={classes.button} variant="contained" color="primary">
            Compare Solutions
          </Button>
        </Link>
        <a href="https://leetcode.com/problems/two-sum/solution">
          <Button className={classes.button} variant="contained" color="primary">
            View Answer
          </Button>
        </a>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired,
};

export default function SimpleDialogDemo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [length, setLength] = useState(30);

  const moveBar = () => {
    const interval = setInterval(() => {
      setLength((len) => (len < 70 ? len + 1 : len));
    }, 50);
    return () => clearInterval(interval);
  };

  const handleClickOpen = () => {
    setOpen(true);
    moveBar();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleClickOpen}
        endIcon={<DoneIcon />}
        disableElevation
      >
          Submit
      </Button>
      <SimpleDialog open={open} onClose={handleClose} length={length} />
    </div>
  );
}

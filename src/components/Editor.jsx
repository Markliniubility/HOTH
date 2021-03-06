/* eslint-disable */
import React from 'react';
import ReactEditor from 'react-monaco-editor';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReplayIcon from '@material-ui/icons/Replay';
import ComputerIcon from '@material-ui/icons/Computer';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ResultDialog from './Result';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  console: {
    height: '10%',
    backgroundColor: '#424242',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    borderTop: 'solid 1px #D0D0D0',
  },
  spacing: {
    flex: 1,
  },
  button: {
    textTransform: 'none',
    marginRight: theme.spacing(1),
  },
}));

const Console = () => {
  const classes = useStyles();
  return (
    <Box className={classes.console}>
      <Button
        className={classes.button}
        startIcon={<ReplayIcon />}
      >
        Reset
      </Button>

      <Button
        className={classes.button}
        startIcon={<ComputerIcon />}
      >
        Javascript
      </Button>

      <Button
        className={classes.button}
        startIcon={<TextFieldsIcon />}
      >
        2 Space
      </Button>

      <Box className={classes.spacing} />

      <Button
        className={classes.button}
        variant="outlined"
        endIcon={<PlayArrowIcon />}
      >
        Run
      </Button>

      <ResultDialog>
        Submit
      </ResultDialog>
    </Box>
  );
};

const Editor = (props) => {
  const classes = useStyles();
  const options = {
    minimap: {
      enabled: false,
    },
    fontSize: 18,
    tabIndex: 2,
  };

  return (
    <Box className={classes.root}>
      <ReactEditor
        theme="vs-dark"
        height={props.height}
        language="javascript"
        loading="Loading..."
        options={options}
        value={props.value}
      />
      <Console />
    </Box>
  );
};

export default Editor;

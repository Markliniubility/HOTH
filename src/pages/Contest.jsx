/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Editor from '../components/Editor';

import Problem from '../components/Problem';
import Status from '../components/Status';
import Chat from '../components/Chat';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    height: '100%',
    borderRight: '1px solid #D0D0D0',
    borderLeft: '1px solid #D0D0D0',
    color: theme.palette.text.secondary,
  },
}));

export default () => {
  const classes = useStyles();

  const defaultValue = `/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */

  const twoSum = function(nums, target) {

  };
  `;

  return (
    <Grid className={classes.root} container spacing={0}>
      <Grid item xs={4}>
        <Paper square className={classes.paper}>
          <Problem />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Editor value={defaultValue} height="90%"/>
      </Grid>
      <Grid item xs={2}>
        <Paper square className={classes.paper}>
          <Status />
          <Chat />
        </Paper>
      </Grid>
    </Grid>
  );
};

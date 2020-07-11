import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { QuestionsTable, QuestionsToolbar } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <QuestionsToolbar />
      <div className={classes.content}>
        <QuestionsTable users={users} />
      </div>
    </div>
  );
};

export default UserList;

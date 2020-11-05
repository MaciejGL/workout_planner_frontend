import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';

import { UserContext } from '../../store/store';
import Rows from './Rows/Rows';

const useStyles = makeStyles({
  btn: {
    position: 'fixed',
    top: 0,
    left: 0,
    fontSize: '1.2em',
    lineHeight: '56px',
    padding: '0 10px',
    color: 'white',
    zIndex: 1300,
  },
  title: {
    padding: '20px',
  },
});

const Plan = ({ match, history }) => {
  const classes = useStyles();
  const { state } = useContext(UserContext);

  const accuratePlan = state.find(plan => plan._id === match.params.id);

  return (
    <>
      <Button
        variant="text"
        color="primary"
        className={classes.btn}
        startIcon={<ArrowBack />}
        onClick={() => history.push('/plans')}>
        Plans
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <Typography className={classes.title} variant="h5">
                  Full Body
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accuratePlan &&
              accuratePlan.days.map(day => (
                <Rows key={Math.random()} day={day} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default withRouter(Plan);

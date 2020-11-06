import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
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
import { ArrowBack, DeleteForeverOutlined, Edit } from '@material-ui/icons';

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
  actionsContainer: {
    alignSelf: 'flex-end',
    margin: '20px',
  },
  title: {
    padding: '20px',
  },
});

const Plan = ({ match, history }) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(UserContext);

  const accuratePlan = state.find(plan => plan._id === match.params.id);
  const handleDeleteRequest = async id => {
    // console.log('delete plan  with this ID', id);
    await axios.delete(
      'https://workout-planner-backendv1.herokuapp.com/plans/' + id,
    );
    dispatch({ type: 'DELETE_PLAN', payload: id });
    history.push('/plans');
    // console.log(deletedResponse);
  };
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
      <div className={classes.actionsContainer}>
        <Button
          onClick={() => handleDeleteRequest(accuratePlan._id)}
          variant="text"
          color="secondary"
          className={classes.btnDelete}
          startIcon={<DeleteForeverOutlined />}>
          Delete
        </Button>
        <Button
          onClick={() => console.log('Edit mode for: ', accuratePlan._id)}
          variant="text"
          color="primary"
          startIcon={<Edit />}>
          Edit
        </Button>
      </div>
    </>
  );
};

export default withRouter(Plan);

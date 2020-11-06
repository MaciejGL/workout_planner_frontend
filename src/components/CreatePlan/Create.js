import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Fab, Button } from '@material-ui/core';
import { Add, Send } from '@material-ui/icons';
import styles from './Create.module.css';
import Modal from '../common/Modal';

import Day from './Day/Day';

import { UserContext } from '../../store/store';

const useStyles = makeStyles({
  addBtn: {
    width: 36,
    height: 36,
    margin: 10,
  },
  saveBtn: {
    margin: '10px 10px 10px auto',
    textAlign: 'center',
  },
});

const Create = props => {
  const classes = useStyles();
  const [days, setDays] = useState([]);
  const [title, setTitle] = useState('');
  const [dayName, setDayName] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const [dayId, setDayId] = useState();
  const [exTitle, setExTitle] = useState('');
  const [exSets, setExSets] = useState('');
  const [exReps, setExReps] = useState('');
  const [exWeight, setExWeight] = useState('');

  const { dispatch } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    const newDay = {
      id: uuidv4(),
      name: dayName,
      description: subtitle,
      excersises: [],
    };
    setDays([...days, newDay]);
    setDayName('');
    setSubTitle('');
  };

  const getDayId = id => {
    // console.log('id', id);
    setDayId(id);
  };

  const handleSubmitEx = e => {
    e.preventDefault();
    const newEx = {
      name: exTitle,
      sets: exSets,
      reps: exReps,
      weight: exWeight,
    };
    const updatedDays = days.map(day => {
      if (day.id === dayId) {
        day.excersises.push(newEx);
        return day;
      }
      return day;
    });
    setDays(updatedDays);
    setExTitle('');
    setExSets('');
    setExReps('');
    setExWeight('');
    toggleModal();
  };
  const handleAddNewPlan = async () => {
    const savedToDB = await axios.post('http://localhost:8080/plans', {
      name: title,
      description: subtitle,
      days,
    });
    dispatch({
      type: 'ADD_PLAN',
      payload: savedToDB.data,
    });
    // console.log(savedToDB);
    props.history.push('/plans');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Plan Builder</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <TextField
          className={styles.input}
          id="standard-basic"
          label="Plan Name"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className={styles.input}
          id="standard-basic"
          label="Day Name"
          value={dayName}
          onChange={e => setDayName(e.target.value)}
        />
        <TextField
          className={styles.input}
          id="standard-basic"
          label="Subtitle"
          value={subtitle}
          onChange={e => setSubTitle(e.target.value)}
        />
        <Fab
          type="submit"
          className={classes.addBtn}
          color="primary"
          aria-label="add">
          <Add />
        </Fab>
      </form>

      <div className={styles.daysContainer}>
        {days.map(day => (
          <Day
            toggleModal={toggleModal}
            key={day.id}
            getDayId={getDayId}
            day={day}
          />
        ))}
      </div>
      {modalOpen && (
        <Modal toggleModal={toggleModal}>
          <form
            onSubmit={handleSubmitEx}
            autoComplete="off"
            className={styles.form}>
            <TextField
              className={styles.input}
              id="standard-basic"
              label="Excersise Name"
              value={exTitle}
              onChange={e => setExTitle(e.target.value)}
            />
            <TextField
              className={styles.input}
              id="standard-basic"
              label="Sets"
              type="number"
              value={exSets}
              onChange={e => setExSets(e.target.value)}
            />
            <TextField
              className={styles.input}
              id="standard-basic"
              label="Reps"
              type="number"
              value={exReps}
              onChange={e => setExReps(e.target.value)}
            />
            <TextField
              className={styles.input}
              id="standard-basic"
              label="Weight"
              type="number"
              value={exWeight}
              onChange={e => setExWeight(e.target.value)}
            />
            <Fab
              type="submit"
              className={classes.addBtn}
              color="primary"
              aria-label="add">
              <Add />
            </Fab>
          </form>
        </Modal>
      )}
      <Button
        className={classes.saveBtn}
        color="primary"
        variant="contained"
        onClick={handleAddNewPlan}
        endIcon={<Send />}>
        Save
      </Button>
    </div>
  );
};

export default withRouter(Create);

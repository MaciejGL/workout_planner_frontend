import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import styles from './Create.module.css';

import Day from './Day/Day';

const useStyles = makeStyles({
  addBtn: {
    width: 36,
    height: 36,
    margin: 10,
  },
});

const Create = () => {
  const classes = useStyles();
  const [days, setDays] = useState([]);
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [, setAddingNewEx] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const newDay = { id: uuidv4(), name: title, description: subtitle };
    setDays([...days, newDay]);
    setTitle('');
    setSubTitle('');
  };

  const handleAddNewExcersise = excersise => {
    // console.log(excersise);
    setAddingNewEx(true);
  };

  return (
    <div>
      <h1 className={styles.title}>Plan Builder</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <TextField
          className={styles.input}
          id="standard-basic"
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
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
            key={day.id}
            handleAddNewExcersise={handleAddNewExcersise}
            day={day}
          />
        ))}
      </div>
    </div>
  );
};

export default Create;

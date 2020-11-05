import React from 'react';
import { AddBox } from '@material-ui/icons';

import styles from './Day.module.css';

const Day = ({ day, handleAddNewExcersise }) => {
  return (
    <article className={styles.dayContainer}>
      <div className={styles.dayHeader}>
        <p>{day.name}</p>
        <AddBox
          onClick={() => handleAddNewExcersise(day.id)}
          className={styles.btn}
          color="primary"
        />
      </div>
      {day.excersises && (
        <ul className={styles.daysContainer}>
          {day.excersises.map(ex => (
            <li>
              {ex.name} - sets: {ex.sets} reps: {ex.reps} weight: {ex.weight}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Day;

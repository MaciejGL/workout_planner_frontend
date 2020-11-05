import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Button } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

import styles from './Homepage.module.css';
import { makeStyles } from '@material-ui/core/styles';

import homepageImage from '../../assets/homepageImage.png';

const spacingStyles = makeStyles({
  subHeading: {
    margin: '30px 10px',
  },
  button: {
    margin: '30px 0',
  },
});
const Homepage = () => {
  const classes = spacingStyles();
  return (
    <div>
      <section className={styles.topSection}>
        <img
          className={styles.backgroundImage}
          src={homepageImage}
          alt="Person training with ropes"
        />
        <Typography className={styles.heading} variant="h4">
          Plan Your Workout
        </Typography>
      </section>
      <div className={styles.bottomSection}>
        <Typography className={classes.subHeading} variant="h5">
          With plan comes a success.
        </Typography>
        <Typography className={styles.description} variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          incidunt ea molestiae, autem.
        </Typography>
        <Link to="/plans">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ArrowRight />}>
            Choose a Plan
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;

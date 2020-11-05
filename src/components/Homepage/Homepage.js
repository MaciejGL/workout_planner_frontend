import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Icon } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

import styles from './Homepage.module.css';
import homepageImage from '../../assets/homepageImage.png';

const useStyles = makeStyles(theme => ({}));

const Homepage = () => {
  const classes = useStyles();

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
        <Typography className={styles.subHeading} variant="h5">
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
            className={styles.button}
            endIcon={<ArrowRight />}>
            Choose a Plan
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;

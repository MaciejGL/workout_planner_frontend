import React from 'react';
import { Card, Typography } from '@material-ui/core';

import styles from './Card.module.css';

const CustomCard = ({ imageUrl, title, days }) => {
  console.log({ days, title });
  return (
    <Card
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={styles.card}>
      <Typography className={styles.cardTitle} variant="h4">
        {title}
      </Typography>
      <Typography className={styles.cardSubtitle} variant="subtitle1">
        Days: <span>{days}</span>
      </Typography>
    </Card>
  );
};

export default CustomCard;

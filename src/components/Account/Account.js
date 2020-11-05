import React from 'react';

import user from '../../dummyDB/user';
import styles from './Account.module.css';

const Account = () => {
  const { name, weight, height, age, totalPlans } = user;
  return (
    <div>
      <h2 className={styles.title}>Account Details</h2>
      <ul className={styles.ul}>
        <li>
          Name: <span>{name}</span>
        </li>
        <li>
          Age: <span>{age}</span>
        </li>
        <li>
          Height: <span>{height}</span>
        </li>
        <li>
          Weight: <span>{weight}</span>
        </li>
        <li>
          Plans: <span>{totalPlans}</span>
        </li>
      </ul>
    </div>
  );
};

export default Account;

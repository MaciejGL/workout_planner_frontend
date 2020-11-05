import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const Row = ({ excersise }) => {
  const { name, sets, reps, weight } = excersise;
  return (
    <TableRow key={Math.random()}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell>{sets}</TableCell>
      <TableCell align="right">{reps}</TableCell>
      <TableCell align="right">{weight}</TableCell>
    </TableRow>
  );
};

export default Row;

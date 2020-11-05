import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  ListItemIcon,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Edit, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

import Row from './Row/Row';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      cursor: 'pointer',
    },
  },
});
const Rows = ({ day }) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  const excercisesList = day.excersises.map(excersise => (
    <Row key={Math.random()} excersise={excersise} />
  ));

  return (
    <React.Fragment>
      {/* TABLE HEAD */}
      <TableRow className={classes.root} onClick={() => setOpen(!open)}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {day.name}
        </TableCell>
        {/* <TableCell scope="row">
          <Edit />
        </TableCell> */}
      </TableRow>
      {/* TABLE HEAD END */}

      {/* TABLE ROW */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                {/* TABLLE ROWS HEAD */}
                <TableHead>
                  <TableRow>
                    <TableCell>Exercise</TableCell>
                    <TableCell>Sets</TableCell>
                    <TableCell align="right">Reps</TableCell>
                    <TableCell align="right">Weight</TableCell>
                  </TableRow>
                </TableHead>
                {/* TABLE ROWS HEAD END */}

                {/* TABLE ROW BODY */}
                <TableBody>{excercisesList}</TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Rows;

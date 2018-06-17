import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

const styles = {
  table: {
    backgroundColor: '#ffffff',
    borderRadius: '.5em',
    width: '19.5%',
  },
  title: {
    textAlign: 'center',
    alignItmes: 'center',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    textAlign: 'center',
    width: '35%',
    fontSize: '.9em',
    color: '#4286f4'
  },
  projected: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    textAlign: 'center',
    width: '20%',
    fontSize: '.9em',
  },
  remove: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    width: '10%',
  },
}
const PlayerTable = (props) => {
  const {position} = props;
  return (
    <div style={styles.table}>
      <Typography variant="title" style={styles.title}>{position}</Typography>
      <Table>
        <TableBody>
          <TableRow style={styles.row}>
            <TableCell style={styles.cell}>Player</TableCell>
            <TableCell style={styles.cell}>Floor/Ceil/Prob</TableCell>
            <TableCell style={styles.projected}>Proj</TableCell>
            <TableCell style={styles.remove}>-</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow style={styles.row}>
            <TableCell style={styles.cell}>odell beckham</TableCell>
            <TableCell style={styles.cell}>10/25/0.5</TableCell>
            <TableCell style={styles.projected}>22.59</TableCell>
            <TableCell style={styles.remove}>-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default PlayerTable

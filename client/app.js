import React, { Component } from 'react'
import PlayerTable from './components/PlayerTable'

const styles = {
  playerTable: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tables: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      something: 'something',
    }
  }

  onSubmit() {
    //update store with new player
  }

  render() {
    return (
      <div style={styles.tables}>
        <div style={styles.row}>
          <PlayerTable position="Quarterbacks" />
          <PlayerTable position="Running Backs" />
          <PlayerTable position="Wide Receivers" />
          <PlayerTable position="Tight Ends" />
          <PlayerTable position="Defenses" />
        </div>
      </div>
    )
  }
}

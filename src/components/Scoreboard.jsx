import React from 'react'

const Scoreboard = (props) => {
  return (
    <div className='score-board'>
        <h2>Score : {props.score}</h2>
    </div>
  )
}

export default Scoreboard
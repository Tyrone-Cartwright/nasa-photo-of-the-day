import React from 'react';

const NasaCard = props => {
  return (
    <div className="npod" alt="space image" src={props.hdurl}>
      <h2>{props.title}</h2>    
    </div>
  )
}

export default NasaCard
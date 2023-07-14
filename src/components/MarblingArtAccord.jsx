import React from 'react'
import Question from './Question';

const MarblingArtAccord = (props) => {
    const {data} = props;
    console.log('data',props);
    
  return (
    <div className='row'>
        {
           data.map(item => <Question key={item.id} {...item} />)
        }
    </div>
  )
}

export default MarblingArtAccord
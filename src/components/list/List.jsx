import React from 'react'

import { listData } from '../../lib/dummydata';
import  Card  from '../card/card'
import "./list.scss"


const List = () => {
  return (
    <div className='list'>
        {listData.map( property => (
            <Card key={property.id} property={property}/>
        ))}
    </div>
  )
}

export default List
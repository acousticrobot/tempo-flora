import React from 'react'
import { Query } from 'react-apollo'

import GET_COMPLETION_DATE_QUERY from '../../queries/GetCompletionDate'


const handleChange = (e, completedAt, client) => {
  client.writeData({
    data: {
      completedAt: e.target.value
    }
  })
}


const DayInput = () => (
  <Query query={ GET_COMPLETION_DATE_QUERY }>
    { ({ data: { completedAt }, client }) => (
      <div className='filter-navbar--input'>
        <label htmlFor='day-input' aria-label='day to assign tasks to' />
        <input
          id='day-input'
          value={ completedAt }
          type='text'
          placeholder='Completed On'
          onChange={ e => handleChange(e, completedAt, client) }
        />
      </div>
    ) }
  </Query>
)

export default DayInput

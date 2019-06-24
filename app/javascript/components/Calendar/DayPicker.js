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


const DayPicker = () => (
  <Query query={ GET_COMPLETION_DATE_QUERY }>
    { ({ data: { completedAt }, client }) => (
      <article className='taskboard-item'>
        <div className='options-nav--input'>
          <label htmlFor='day-input' aria-label='day to assign tasks to' />
          <input
            id='day-input'
            value={ completedAt }
            type='text'
            placeholder='Completed On'
            onChange={ e => handleChange(e, completedAt, client) }
          />
        </div>
      </article>
    ) }
  </Query>
)

export default DayPicker

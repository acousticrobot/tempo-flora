import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import { localStartOfDay, localEndOfDay } from '../../lib/Time'
import GET_TARGET_DATE_QUERY from '../../queries/GetTargetDate'

import GraphInterface from '../Graph/GraphInterface'

const SubmitButton = () => (
  <button type='submit'>
    <nav className='focus-header--nav-icon'>
      <div className='focus--icon'>
        <div className='icon icon-repeat' />
      </div>
    </nav>
  </button>
)

const allPoints = deeds => (
  deeds.map(deed => deed.points).reduce((a, b) => a + b, 0)
)

class DayPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      hasChanged: false
    }

    this.initializeDate = this.initializeDate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  initializeDate(date) {
    this.setState({ date: new Date(date).toLocaleDateString(), hasChanged: false })
  }

  handleChange(e) {
    this.setState({ date: e.target.value, hasChanged: true })
  }

  handleSubmit(e, client) {
    e.preventDefault()
    const { date } = this.state
    const targetDate = localStartOfDay(new Date(date))
    const targetEndDate = localEndOfDay(new Date(date))

    client.writeData({
      data: { targetDate, targetEndDate }
    })
    this.initializeDate(targetDate)
  }

  render() {
    const { date, hasChanged } = this.state
    const { foci } = this.props
    const deeds = foci.flatMap(f => f.deeds)
    const points = allPoints(deeds)

    return (
      <Query
        query={ GET_TARGET_DATE_QUERY }
        // to trigger onCompleted with local data
        // https://github.com/apollographql/react-apollo/issues/2177
        notifyOnNetworkStatusChange
        onCompleted={ data => this.initializeDate(data.targetDate) }
      >
        { ({ client }) => (
          <article className='taskboard-item -form'>
            <form onSubmit={ e => this.handleSubmit(e, client) }>
              <header>
                <h1>
                  <label htmlFor='day-input' aria-label='day to assign tasks to'>
                    Date:
                  </label>
                  <input
                    id='day-input'
                    type='text'
                    value={ date }
                    onChange={ this.handleChange }
                  />
                  { hasChanged &&
                    <SubmitButton />
                  }
                </h1>
              </header>
            </form>

            <article className='graph'>
              <GraphInterface
                deeds={ deeds }
                foci={ foci }
                totalPoints={ points }
                maxPoints={ points }
              />
            </article>

          </article>
        ) }
      </Query>
    )
  }
}

DayPicker.propTypes = {
  foci: PropTypes.array.isRequired
}

export default DayPicker

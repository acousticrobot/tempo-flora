import React from 'react'
import { render } from 'react-dom'
import TempoApp from './containers/TempoApp'

const serverProps = JSON.parse(document.querySelector('#tempo').dataset.serverProps)
const tempo = document.querySelector('#tempo')

render(<TempoApp userId={ serverProps.userId } />, tempo)

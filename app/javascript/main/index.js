import React from 'react'
import { render } from 'react-dom'
import FloraApp from './containers/FloraApp'

const serverProps = JSON.parse(document.querySelector('#flora').dataset.serverProps)
const flora = document.querySelector('#flora')

render(<FloraApp userId={ serverProps.userId } />, flora)

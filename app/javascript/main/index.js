import React from 'react'
import { render } from "react-dom";
import FloraApp from './containers/FloraApp'
import FloraContainer from './containers/FloraContainer'


const serverProps = JSON.parse(document.querySelector('#flora').dataset.serverProps)
const flora = document.querySelector('#flora')

render(<FloraApp userId={serverProps.userId}/>, flora)

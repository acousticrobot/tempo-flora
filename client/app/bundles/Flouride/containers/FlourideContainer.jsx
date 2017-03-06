import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Sandbox from '../components/Sandbox';

// a simple query example, to a fixed user
const MyQuery = gql`{ user(id:1) { username } }`;

export default graphql(MyQuery)(Sandbox);




import gql from 'graphql-tag';

const TASK_FILTER_QUERY = gql`
  query getTaskFilter{
    taskFilter @client
  }
`

export default TASK_FILTER_QUERY

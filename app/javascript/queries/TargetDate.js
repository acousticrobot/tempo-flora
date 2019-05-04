import gql from 'graphql-tag'

const TARGET_DATE = gql`
  query TargetDate{
    targetDate @client
  }
`

export default TARGET_DATE

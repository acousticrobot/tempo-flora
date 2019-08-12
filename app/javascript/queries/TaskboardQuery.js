import gql from 'graphql-tag'

const TASKBOARD_QUERY = gql`
  query TaskboardQuery($userId: ID!, $deedsSince: String, $deedsTo: String) {
    targetDate @client @export(as: "deedsSince")
    targetEndDate @client @export(as: "deedsTo")
    user(id: $userId) {
      id
      username
      theme
    }
    foci {
      id
      title
      position
      color
      tasks {
        id
        title
        points
        repeatable
        position
      }
      deeds(since: $deedsSince, to: $deedsTo) {
        id
        title
        focusTitle
        points
        position
        completedAt
      }
    }
    __type(name: "Themes") {
      enumValues {
        name
      }
    }
    optionsFilter @client
    targetDate @client
    focusFilter @client {
      filter
      focusId
    }
  }
`

export default TASKBOARD_QUERY

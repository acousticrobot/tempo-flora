## Tempo Flora

Watch your time grow.

## Deploy notes

Run with foreman to serve client assets via webpack

tests with rspec:

`bundle exec rspec spec`

tests with Mocha-chai: `cd client && npm run test`

linting: `cd client && npm run lint`


### GraphQL

test on dev from `/graphql`

query tasks:

```
{
  user(id:1) {
    foci {
      id
      tasks {
        id
        title
        completed
      }
    }
  }
}
```

add task mutation:

```
mutation {
  addTask(input:{
    focusId: 1,
    title: "A brand new Task"
  }) {
    task {
      id,
      title
    }
  }
}
```

complete a task mutation:

```
mutation {
  completeTask(input:{
    taskId: 2,
  }) {
    task {
      id,
      title,
      completed
    }
  }
}
```




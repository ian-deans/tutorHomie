### __API.post__
  - Takes a target and a data object as arguments.

`````javascript
  const target = {
      type: types.STUDENTS, 
      id: 14
    } 

  const data = [
      {id: 14},
      {name: 'Testy McTester'},
      {email: 'test_dood@dood.com'}  
    ] 

  API.post(target, data)
`````
  
target is an object containing two key value pairs, type and id.

data is an array of key value pairs representing the values of the object being added to the database.


  ### __API.getAll__
  - Takes a type string as an argument

  `````javascript
    API.getAll(types.STUDENTS) 
  `````

### __API.getOne__
  - Takes a target object as an argument.

`````javascript
  const target = {
    type: types.STUDENTS,
    id: 14
  }

  API.getOne(target)
`````
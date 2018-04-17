### __API.post__
  - Takes a type string and a data object as arguments.

`````javascript
  const type = types.STUDENTS 

  const data = {
    name: 'Testy McTester',
    email: 'test_dood@dood.com',
    handle: 'testMcDood'
  }

  API.post(type, data)
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
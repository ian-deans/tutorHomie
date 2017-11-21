import test from 'ava'
import utils from '../../utils'
import Students from '../Students'


test.before(async t => {
  await utils.clearTable('students')
})

test.after(async t => {
  await utils.clearTable('students')
})


test.serial('Students', t => {
  t.truthy(Students, 'Model did not import correctly.')
})

test.serial('Students.add()', async t => {
  t.truthy(Students.add, 'Add Function does not exist.')

  try {
    await Students.add({
      email: 'test1@test1.com', 
      name: 'Test1', 
      class_code: 'TEST', 
      handle: 'Testery', 
      grad_date: new Date(), 
      invited_to_slack: false,
      active: false
    })
  } catch(error) {
    t.fail('Function threw error: ' + error)
  }

  let results = await Students.findAll()
  t.truthy(results, 'Nothing returned from database.')
  t.true(results.length === 1, 'Returned result was empty.')
})

test.serial('Students.findAll()', async t => {
  t.truthy(Students.findAll, 'findAll function does not exist.')

  let results = await Students.findAll()
  t.truthy(results, 'Nothing returned from database.')
  t.true(results[0].email === 'test1@test1.com', 'Unexpected email encountered in data returned from database: ')
})

test.serial('Students.findByEmail()', async t => {
  t.truthy(Students.findByEmail, 'findByEmail function does not exist.')
  
  let student = await Students.findByEmail('test1@test1.com')
  t.truthy(student, 'Nothing returned from database.')
  t.true(student[0].email === 'test1@test1.com', 'Unexpected result returned from database.')
})

test.serial('Students.update()', async t => {
  t.truthy(Students.update, 'update function does not exist.')

  let student = (await Students.findByEmail('test1@test1.com'))[0]
  t.truthy(student, 'Nothing returned from database.')
  t.true(student.name === 'Test1', 'Unexpected name returned for preliminary student.')
  try {
    await Students.update('test1@test1.com', {name: 'Test2'})
  } catch (error) {
    t.fail('Error encountered whilst updating student.', error)
  }

  student = (await Students.findByEmail('test1@test1.com'))[0]
  t.truthy(student, 'Nothing returned from databaase')
  t.true(student.name === 'Test2', "Student's name was not changed.")
})


test.serial('Students.activate()', async t => {
  t.truthy(Students.activate, '.activate() function does not exist.')

  let student = (await Students.findByEmail('test1@test1.com'))[0]
  t.truthy(student, 'Nothing returned from the database.')
  t.false(student.active === 1, 'Student is unexpectedly set to active already.')

  await Students.activate('test1@test1.com')
  student = (await Students.findByEmail('test1@test1.com'))[0]
  t.truthy(student, 'Nothing returned from database.')
  t.true(student.active === 1, 'Student was not activated.')
})


test.serial('Students.deactivate', async t => {
  t.truthy(Students.deactivate, '.deactivate() function does not exist.')

  let student = (await Students.findByEmail('test1@test1.com'))[0]
  t.truthy(student, 'Nothing returned from database.')
  t.true(student.active === 1, 'Student is already inactive.')
  
  await Students.deactivate('test1@test1.com')
  student = (await Students.findByEmail('test1@test1.com'))[0]
  t.truthy(student, 'Nothing returned from database.')
  t.false(student.active === 1, 'Student was not deactivated.')
})


test.serial('Students.delete()', async t => {
  t.truthy(Students.delete, '.delete() function does not exist.')

  let students = await Students.findAll()
  t.truthy(students, 'Nothing returned from database.')
  t.true(students.length === 1, 'Result with unexpected length encountered.')
  t.true(students[0].email === 'test1@test1.com', 'Unexpected student email encountered.')

  await Students.delete('test1@test1.com')
  students = await Students.findAll()
  t.truthy(students, 'Nothing returned from database.')
  t.true(students.length === 0, 'Student was not deleted from database.')
})

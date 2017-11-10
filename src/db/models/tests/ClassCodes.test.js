import test from 'ava'
import utils from '../../utils'
import ClassCodes from '../ClassCodes'


test.before(async t => {
  await utils.clearTable('class_codes')
})

test.after(async t => {
  await utils.clearTable('class_codes')
})

test('ClassCodes', t => {
  t.truthy(ClassCodes, 'ClassCodes import did not function properly.')
})

test.serial('ClassCodes.add()', async t => {
  t.truthy(ClassCodes.add, 'Function not found.')

  try {
    await ClassCodes.add({code: 'TESTCODE1', value: 'Test code for automated testing.'})
  } catch (error) {
    t.fail('Function threw an error.')
  }

  let result = await ClassCodes.findAll()
  t.truthy(result, 'No result returned from add().')
  t.true(result.length === 1, 'Unexpected length encountered in returned data.')
})

test.serial('ClassCodes.findAll()', async t => {
  t.truthy(ClassCodes.findAll, 'Function not found.')

  let result = await ClassCodes.findAll()
  t.truthy(result, 'Function did not return data.')
  t.true(result.length === 1, 'Unexpected length of returned data.')
  t.true(result[0].code === 'TESTCODE1', 'Function found unexpected results.')
})

test.serial('ClassCodes.findByCode()', async t => {
  t.truthy(ClassCodes.findByCode, 'Function not found.')

  let result = await ClassCodes.findByCode('TESTCODE1')
  t.truthy(result, 'Function did not return any data.')
})

test.serial('ClassCodes.update()', async t => {
  t.truthy(ClassCodes.update, 'Function does not exist.')

  let newVal = 'Update value for test code.'
  await ClassCodes.update('TESTCODE1', {value: newVal})
  var result = await ClassCodes.findByCode('TESTCODE1')
  t.true(result[0].value === newVal, 'Function did not update value of class code.')
})

test.serial('ClassCodes.delete()', async t => {
  t.truthy(ClassCodes.delete, 'Function does not exist.')

  let result = await ClassCodes.findAll()
  t.true(result.length === 1)
  await ClassCodes.delete('TESTCODE1')
  result = await ClassCodes.findAll()
  t.true(result.length === 0)
})

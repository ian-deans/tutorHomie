import inquirer from 'inquirer'
import columnify from 'columnify'
import {cli_actions as actions} from './lib'
import ClassCodes from '../src/db/models/ClassCodes'

const MIN_COLUMN_WIDTH = 50

export default async function classCodesCLI(action) {
  let results
  let option = process.argv[4]

  switch(action) {
    case actions.VIEW:
      results = await _allCodes()
      break

    case actions.FIND:
      results = await _oneCode(option)
      break

    case actions.ADD:
      let newCode = await _newCodeData()

      try {
        await ClassCodes.add(newCode)
      } 
      catch (error) {
        throw error
      }
      results = 'Success.'
      break

    case actions.UPDATE:
    //TODO: Add update feature
    console.log('option: ', option)
    try {
      const newVals = JSON.parse(process.argv[5])
      console.log('newVals: ', newVals)
      await ClassCodes.update(option, newVals)
      } catch (error) {
        throw error
      }
      results = 'Success'
      break

    case actions.DELETE:
      try {
        await ClassCodes.delete(option)
      } catch (error) {
        throw error
      }
      results = 'Success'
      break

    default: 
      return console.log('Unrecognized command.')
  }
  console.log(results)
  process.exit()
}


const _newCodeData = () => inquirer.prompt([{
  type: 'input',
  name: 'code',
  message: 'Enter the code: '
},
{
  type: 'input',
  name: 'value',
  message: 'Enter the code description: '
}
])

const _allCodes = async () => columnify(await ClassCodes.findAll(), {paddingChr: '.', minWidth: MIN_COLUMN_WIDTH})
const _oneCode = async code => columnify(await ClassCodes.findByCode(code), {paddingChr: '.', minwidth: MIN_COLUMN_WIDTH})

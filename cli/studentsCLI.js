import inquirer from 'inquirer'
import columnify from 'columnify'
import {cli_actions as actions} from './lib'
import Students from '../src/db/models/Students'

const MIN_COLUMN_WIDTH = 30

export default async function studentsCLI(action) {
  let results;
  let option;

  switch(action) {
    case actions.VIEW:
      results = await _allStudents()
      break;

    case actions.FIND:
    //TODO: Add options for searching by name, email, handle
      option = process.argv[4]
      results = await _oneStudent(option)
      break;
    
      case actions.ADD:
        let newStudent = await _newStudentData()
        console.log(newStudent)

        
        try {
          await Students.add(newStudent)
        }
        catch (error) {
          throw error
        }
        results = 'Success'
        break;
        
      case actions.UPDATE:
      //TODO: Add update feature
        break;
        
      case actions.DELETE:
        option = process.argv[4]
        try {
          await Students.delete(option)
        } catch (error) {
          throw error
        }
        break;
        
  }
  console.log(results)
  process.exit()
}

const columnConfig = {
  email: {minWidth: 40},
  name: {minWidth: 30},
  class_code: {minWidth: 25},
  handle: {minWidth: 20
  }
}

const _allStudents = async () => columnify(await Students.findAll(), {paddingChr: '. ', config: columnConfig})
const _oneStudent = async email => columnify(await Students.findByEmail(email), {paddingChr: '. ', config: columnConfig})

const _newStudentData = () => inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: "Enter student's name: "
  }, 
  {
    type: 'input',
    name: 'email',
    message: 'Email: '
  },
  {
    type: 'input',
    name: 'class_code',
    message: 'Enter class code: ',
  },
  {
    type: 'input',
    name: 'handle',
    message: 'Handle: '
  },
  {
    type: 'input',
    name: 'grad_date',
    message: 'Graduation date: '
  },
  {
    type: 'list',
    name: 'invited_to_slack',
    message: 'Invited to Slack?',
    choices: ['true', 'false']
  },
  {
    type: 'list',
    name: 'active',
    message: 'Is this student active?',
    choices: ['true', 'false']
  }
])

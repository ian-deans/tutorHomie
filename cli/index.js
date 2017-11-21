import {cli_options as options} from './lib'
import classCodesCLI from './classCodesCLI'
import studentsCLI from './studentsCLI'

export default function tutorHomieCLI() {
  const dataModel = process.argv[2]
  const action = process.argv[3]
  
  switch(dataModel) {
  case options.CLASS_CODES:
    classCodesCLI(action)
    break
      
  case options.STUDENTS:
    studentsCLI(action)
    break

  case options.HELP:
    console.log('Help coming soon!')
    console.log('Usage: tutorHomie <option> <action> <argument>')
    console.log(
      `options:
          cc       class codes
          st       students
          tsh      tutoring sessions`
    )
    console.log(
      `actions:
          v         view
          f         find
          d         delete`
    )
    break
    
  default:
    console.log('Unrecognized option, trying running with ? as the option.')
  }
}

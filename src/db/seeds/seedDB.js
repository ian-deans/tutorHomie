import studentList from './student_roster'
import classCodeList from './classcode_list'
import tutorList from './tutor_list'
import {Student, ClassCode, Tutor} from '../models'
import db from '../db'


const seedTutors = async () => {
  await Promise.all(
    tutorList.map(async tutor => {
      const newTutor = await new Tutor({
        name: tutor.name,
        email: tutor.email,
        handle: tutor.handle,
      })
      await newTutor.save()
      console.log(`-> Saved tutor ${tutor.name}`)
    })
  )
  console.log('All tutors seeded.')
}


async function getStuff() {
  await db.getAll()
}

const seedStudents = async () => {
  let Ian
  try {
    Ian = await Tutor.findOne({name: 'Ian Deans'})
    console.log('Tutor Found.')
  }
  catch(error) {
    throw error
  }

  await Promise.all(studentList.map(async student => {

      let studentCode
      try {
        studentCode = await ClassCode.findOne({code: student.classcode})
        console.log('Class Code Found.')
      } 
      catch(error) {
        console.log(`Code not found - ${error}`)
      }

      if (studentCode) {

        const studentData = {
          name: student.name,
          email: student.email,
          classCode: studentCode._id,
          tutor: Ian._id,
          handle: student.handle ? student.handle : 'none'
        }

        if (student.hasOwnProperty('active')) {
          studentData.active = student.active
        }

        // if (student.hasOwnProperty('handle')) {
        //   studentData.handle = student.handle
        // }

        // studentData.classCode= studentCode._id
        // studentData.email = student.email
        // studentData.name = student.name


        const newStudent = new Student(studentData)

        await newStudent.save()

        console.log(newStudent)

        try {
          await Ian.students.push(newStudent._id)
          console.log('Student Object ID pushed to tutor doc.')
          console.log(`Student ${student.name} added to ${Ian.name}.`)
        } 
        catch(error) {
          console.log(`Could not save student on Tutor doc - ${error}`)
        }

      } else {
        console.log(`Class Code not found for student: ${student.name}`)
      }
    })
  )
  await Ian.save()
  console.log('Tutor Saved.')

}

const seedClassCodes = async () => {
  await Promise.all(
    classCodeList.map(async code => {
      try {
        const newCode = new ClassCode({
          code: code.code, value: code.value
        })

        await newCode.save()
        console.log(`--> Saved code ${newCode}`)  
      }
      catch(error) {
        throw error
      }
    })
  )
}


// seedClassCodes()
// seedTutors()
seedStudents()
  .then(() => db.close())




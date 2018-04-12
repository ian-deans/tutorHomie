// ==UserScript==
// @name         Tutor Survey Assist
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  For use with TutorHomie
// @author       Ian Deans
// @match        https://docs.google.com/forms/d/e/1FAIpQLSc_q0CSp5Bpn7lfDAdoPCbBTW-OxWQVhC3gG5P9e6iE4FERjw/viewform
// @grant        none
// ==/UserScript==

(function() {
  'use strict'

  function fillSurvey(student) {
    let fields = document.getElementsByTagName('form')[0]
    student = student.split('~')

    fields[0].value = student[0]
    fields[1].value = student[1]
    fields[2].value = student[2]
    fields[3].value = student[3]
  }

  let studentString = prompt('Student string')

  fillSurvey(studentString)
})()
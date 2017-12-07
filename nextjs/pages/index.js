import React from 'react'
import Head from 'next/head'
import TutorHomie from '../components/TutorHomie'

export default () => (
  <div>
    <Head>
      <title>Tutor Homie</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    </Head>
    <TutorHomie />
  </div>
)
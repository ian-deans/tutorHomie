import React from 'react'
import Head from 'next/head'
import TutorHomie from '../TutorHomie'

export default () => (
  <div>
    <Head>
      <title>Tutor Homie</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <script src="https://use.fontawesome.com/76069bbd3d.js"></script>
    </Head>
    <TutorHomie />
  </div>
)
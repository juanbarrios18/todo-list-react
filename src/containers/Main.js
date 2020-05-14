import React from 'react'
import Notes from '../components/Notes'
import '../assets/styles/main.css'

function Main (props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Notes />
          <Notes />
          <Notes />
        </div>
        <div className='col'>
          <Notes />
          <Notes />
          <Notes />
        </div>
      </div>
    </div>
  )
}

export default Main

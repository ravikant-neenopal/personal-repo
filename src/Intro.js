import React from 'react'

function Intro(props) {
  return (
    <>
      <h2 className="">
        Name: {props.name}
      </h2>
      <h2 className="">
        Course: {props.course}
      </h2>
      <h2 className="">
        RollNo: {props.roll}
      </h2>
    </>
  )
}

export default Intro
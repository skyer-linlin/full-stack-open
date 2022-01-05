import React from 'react';


const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

}

const Header = ({name}) => {
  return (
    <h2>{name}</h2>
  )
}

const Total = ({parts}) => {
  const sum = parts.map(part => part.exercises).reduce((sum, e) => sum + e)
  console.log(sum)
  return (
    <b>total of {sum} exercises</b>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    parts.map((part) => <Part part={part} key={part.id} />)
  )
}

export default Course
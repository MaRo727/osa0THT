const Part = (props) => {
  return (
      <p>{props.part.name} <br /> exercises: {props.part.exercises} </p>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
    )
}

const Content = (props) => {
    return (
      <div>
        {
          props.parts.map(part => <Part part={part}/>)
        }
      </div>
      )

}

const Total = (props) => {
  return (
    <div>
      
       <p>Total excercises: {props.course.parts.reduce((total, part) => total + part.exercises, 0)}</p> 
      
    </div>
  )
}
const Course = (props) => {
  return (
    <div>
      {
      props.course.map(section => 
        <div>
          <Header course={section} />
          <Content parts={section.parts} />
          <Total course={section} />
        </div>
        )}
  </div>
  )
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App


//         :)
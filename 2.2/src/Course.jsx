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
              )
              }
        </div>
        )
      }
      
export default Course;
     
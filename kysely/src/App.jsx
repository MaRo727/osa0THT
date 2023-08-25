import { useState } from 'react'
const StatisticButton = (props) => {
  return (
    <button onClick={props.jarkko}>{props.teksti}</button>
  )
}

const Palaute = (props) => {
  return (
    <div>
      <h1>Palaute</h1>
      <StatisticButton jarkko={props.handleGood} teksti="Hyvä"/>
      <StatisticButton jarkko={props.handleNeutral} teksti="Neutraali"/>
      <StatisticButton jarkko={props.handleBad} teksti="Huono"/>
    </div>
    
  )
}
const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.a + props.b}</p>
    </div>
  )
}
const Statistiikat = (props) => {
  if(props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <p>Ei palautetta vielä</p>
    )
  } else {
      return (
        <div>
          <h1>Statistiikat</h1>
          <StatisticLine a={"Hyvä palaute: "} b={props.good}/>
          <StatisticLine a={"Neutraali palaute: "} b={props.neutral}/>
          <StatisticLine a={"Huono palaute: "} b={props.bad}/>
          <StatisticLine a={"Palaute yhteensä: "} b={props.good + props.bad + props.neutral}/>
          <StatisticLine a={"Positiivinen: "} b={(props.good*1 + props.neutral*0 + props.bad*-1)/(props.good + props.bad + props.neutral)}/>
          <StatisticLine a={"Keskiverto: "} b={props.good/(props.good + props.bad + props.neutral)*100}/>
        </div>   
      )
     
      // <StatisticLine text="good" value ={...} />
  }
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Palaute
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <Statistiikat
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App;

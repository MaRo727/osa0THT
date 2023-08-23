import { useState } from 'react'

const Palaute = (props) => {
  return (
    <div>
      <h1>Palaute</h1>
      <button onClick={props.handleGood}>Hyvä</button>
      <button onClick={props.handleNeutral}>Neutraali</button>
      <button onClick={props.handleBad}>Huono</button>
    </div>
    
  )
}

const Statistiikat = (props) => {
  return (
    <div>
      <h1>Statistiikat</h1>
      <p>Hyvä palaute: {props.good}</p>
      <p>Neutraali palaute: {props.neutral}</p>
      <p>Huono palaute: {props.bad}</p>
    </div>   
  )
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

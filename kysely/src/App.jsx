import { useState } from 'react'
const StatisticButton = (props) => {
  return (
    <button onClick={props.jarkko}>{props.teksti}</button>
  )
}

const Palaute = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <h1>Palaute</h1>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticButton jarkko={props.handleGood} teksti="Hyvä"/>
              <StatisticButton jarkko={props.handleNeutral} teksti="Neutraali"/>
              <StatisticButton jarkko={props.handleBad} teksti="Huono"/>
            </td>
          </tr>          
        </tbody>

      </table>
    </div>
    
  )
}
const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.a}</p>
    </div>
  )
}

const StatisticLineB = (props) => {
  return (
    <div>
      <p>{props.b}</p>
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
          <table>
            <tbody>
              <tr>
                <td>
                  <h1>Statistiikat</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine a={"Hyvä palaute: "}/> 
                </td>
                <td>
                  <StatisticLineB b={props.good}/>
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine a={"Neutraali palaute: "}/>
                </td>
                <td>
                  <StatisticLineB b={props.neutral}/>
                </td>
              </tr>
               <tr>
                <td>
                <StatisticLine a={"Huono palaute: "}/>
                </td>
                <td>
                <StatisticLineB b={props.bad}/>
                </td>
               </tr>
               <tr>
                <td>
                <StatisticLine a={"Palaute yhteensä: "}/>
                </td>
                <td>
                <StatisticLineB b={props.good + props.bad + props.neutral}/>
                </td>
               </tr>
               <tr>
                <td>
                <StatisticLine a={"Positiivinen: "}/>
                </td>
                <td>
                <StatisticLineB b={(props.good*1 + props.neutral*0 + props.bad*-1)/(props.good + props.bad + props.neutral)}/>
                </td>
               </tr>
                <tr>
                  <td>
                  <StatisticLine a={"Keskiverto: "}/>
                  </td>
                  <td>
                  <StatisticLineB b={props.good/(props.good + props.bad + props.neutral)*100}/>
                  </td>
                </tr>
               
            </tbody> 
          </table>
        </div>   
      )
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

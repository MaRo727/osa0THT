import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const [position, setPosition] = useState(0)

  const [aaniMaara, setAaniMaara] = useState(0)



  const nappi = () => {
    const numero = Math.floor((Math.random() * anecdotes.length) + 0)
    setSelected(numero)
    isoin()
  }
  const aanestys = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    isoin()
  }

  const isoin = () => {
    let largest = votes[0];
    let pos = 0;
    
    for(let i = 0; i < votes.length; i++){
      if(votes[i] === 0){
        if(votes[i] > largest){
          largest = votes[i];
          pos = i;
        }
      }else{
        if(votes[i] > largest -1){
          largest = votes[i];
          pos = i;
        }
      }
    }


  setPosition(pos)
  setAaniMaara(largest)
  console.log(aaniMaara , pos)
}
  return (
    <div>
      {anecdotes[selected]}
      {/* {eniten[selected]} */}
      <br/>
      <button onClick={aanestys}>Äänestä</button> <br />
      <button onClick={nappi}>Seuraava</button> <br />
      { "Ääniä on: " + votes[selected]} <br />
      <br/>
      <h1>most votes: </h1>
      {anecdotes[position] + " with :"}
      <br />
      <p><b>{votes[selected] === aaniMaara + 1? votes[selected] : aaniMaara}</b> votes! </p>

    </div>
  )
}

export default App
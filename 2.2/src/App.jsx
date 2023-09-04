import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const handleNames = () => {
  setNewName(newName).push(handleList)
}

const handleList = () => {
  setPersons(persons)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input {...handleNames}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>{persons}</p>
    </div>
  )

}

export default App

// 
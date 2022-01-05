import React, {useState} from 'react'

const Person = ({person}) => {
  return (<div>{person.name} {person.number}</div>)
}

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      //  添加元素到 persons 中
      setPersons(persons.concat({name: newName, number: newNumber}));
    }
    // 将 name 复原为空
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <Person person={p} key={p.name} />)}
    </div>
  )
}

export default App
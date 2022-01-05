import React, {useEffect, useState} from 'react'
import axios from "axios";

const Person = ({person}) => {
  return (<div>{person.name} {person.number}</div>)
}

const Filter = ({namePart, handleChange}) => {
  return (
    <div>
      filter shown with <input value={namePart} onChange={handleChange} />
    </div>
  )
}

const Persons = ({personsToShow}) => {
  return (
    <div>
      {personsToShow.map(p => <Person person={p} key={p.name} />)}
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        number: <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [namePart, setNamePart] = useState('')
  const personToShow = persons.filter(p => p.name.toLowerCase().includes(namePart))

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log('promise fulfilled, persons size is ', res.data.length)
        setPersons(res.data)
      })
  }

  useEffect(hook, [])


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNamePartChange = (event) => {
    console.log(event.target.value)
    setNamePart(event.target.value)
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
      <Filter namePart={namePart} handleChange={handleNamePartChange} />
      <h3>add a new</h3>
      <PersonForm handleSubmit={addPerson} newName={newName} newNumber={newNumber}
                  handleNumberChange={handleNumberChange} handleNameChange={handleNameChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personToShow} />
    </div>
  )
}

export default App
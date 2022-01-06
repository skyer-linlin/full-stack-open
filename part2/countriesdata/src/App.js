import React, {useEffect, useState} from "react";
import axios from "axios";

const CountryFilter = ({keyWord, handleChange}) => {
  return (
    <div>
      find countries <input value={keyWord} onChange={handleChange} />
    </div>
  )
}

const CountryList = ({showCountries}) => {
  if (showCountries.length === 1) {
    return (<CountryInfo country={showCountries[0]} />)
  }
  if (showCountries.length < 10) {
    return showCountries
      .map(c => c.name.common)
      .map(str => (<CountryItem name={str} key={str} />))
  }
  return <div />
}

const LanguageList = ({languages}) => {
  return (<ul>{Object.values(languages).map(l => (<li key={l}>{l}</li>))}</ul>)
}


const CountryInfo = ({country}) => {
  console.log(country)
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>languages</h3>
      <LanguageList languages={country.languages} />
      <Flag flagLink={country.flags.svg} />
    </div>
  );
}
const Flag = ({flagLink}) => {
  console.log(flagLink)
  return (<img src={flagLink} />)
}
const CountryItem = ({name}) => {
  return (<div>{name}</div>)
}

function App() {
  const [countries, setCountries] = useState([])
  const [keyWord, setKeyWord] = useState('')

  const showCountries = countries.filter(c => c.name.common.toLowerCase().includes(keyWord))


  const hook = () => {
    console.log("effect")
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log("effect fulfilled");
        setCountries(response.data);
      })
  }
  useEffect(hook, [])
  console.log('render', countries.length)

  const handleKeywordChange = (event) => {
    console.log(event.target.value)
    setKeyWord(event.target.value)
  }

  return (
    <div>
      <CountryFilter keyWord={keyWord} handleChange={handleKeywordChange} />
      <CountryList showCountries={showCountries} />

    </div>
  );
}

export default App;

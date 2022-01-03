import React, {useState} from 'react'

const Header = ({title}) => (<h1>{title}</h1>)

const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad, stks}) => {
  if (stks.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={stks.all} />
      <StatisticLine text="average" value={stks.average} />
      <StatisticLine text="positive" value={stks.positive * 100 + '%'} />
      </tbody>
    </table>
  )
    ;
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stks, setStks] = useState({all: 0, average: 0, positive: 0})

  const buttonTitle = "give feedback"
  const statisticsTitle = "statistics"

  const increaseGood = () => {
    setGood(good + 1)
    updateStatistics(good + 1, neutral, bad)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    updateStatistics(good, neutral + 1, bad)
  }
  const increaseBad = () => {
    setBad(bad + 1)
    updateStatistics(good, neutral, bad + 1)
  }

  const updateStatistics = (good, neutral, bad) => {
    let all = good + neutral + bad
    let average = (good - bad) / all
    let positive = good / all
    console.log("all", all, "average", average, "positive", positive)
    setStks({all, average, positive})
  }
  return (
    <div>
      <Header title={buttonTitle} />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Header title={statisticsTitle} />
      <Statistics good={good} bad={bad} neutral={neutral} stks={stks} />
    </div>
  )
}

export default App
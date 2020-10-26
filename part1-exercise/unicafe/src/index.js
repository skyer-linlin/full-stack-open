import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = ({ name }) => {
  return <h1>{name}</h1>;
};

const Button = ({ handlClick, text }) => {
  return <button onClick={handlClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all;

  if (all === 0) return <div>no feedback given </div>;
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive * 100 + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Display name="give feedback" />
      <Button handlClick={() => setGood(good + 1)} text="good" />
      <Button handlClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handlClick={() => setBad(bad + 1)} text="bad" />
      <Display name="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

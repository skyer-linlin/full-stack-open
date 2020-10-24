import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.partx} {props.exer}
    </p>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part partx={props.part1} exer={props.exer1} />
      <Part exer={props.exer2} partx={props.part2} />
      <Part partx={props.part3} exer={props.exer3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exer1={exercises1}
        part2={part2}
        exer2={exercises2}
        part3={part3}
        exer3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  console.log(props);
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.partx.name} {props.partx.exercises}
    </p>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part partx={props.p1} />
      <Part partx={props.p2} />
      <Part partx={props.p3} />
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header name={course} />
      <Content p1={part1} p2={part2} p3={part3} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

import "./App.css";
import { Fragment } from "react";
import { InputTodo } from "./components/InputTodo";
import { ListTodo } from "./components/ListTodo";

export const App = () => {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
};

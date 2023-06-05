import "../App.css";
import React, { useState, useContext } from "react";
import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";
import { MdAddTask } from "react-icons/md";
import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";
import "../App.css";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Plase Enter a Task");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setTodoString("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        textAlign: "center",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        margin: "auto",
      }}
    >
      <FormGroup className="todos my-5">
        <InputGroup>
          <Input
            className="border border-1 border-dark"
            type="text"
            name="todo"
            placeholder="Enter Task"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="outline-primary">
            <MdAddTask fontSize={"28px"} />
          </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;

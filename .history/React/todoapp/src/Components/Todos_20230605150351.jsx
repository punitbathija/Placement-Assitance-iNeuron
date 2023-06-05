import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { TodoContext } from "../Context/TodoContext";
import { REMOVE_TODO } from "../Context/action.types";
import "../App.css";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="todos mt-5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem
          className="border border-dark"
          key={todo.id}
          style={{
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          {todo.todoString}
          <span
            className="float-end"
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id,
              });
            }}
          >
            <FaCheckDouble color="blue" style={{ cursor: "pointer" }} />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;

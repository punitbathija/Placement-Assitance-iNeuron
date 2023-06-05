import "./App.css";
import "./index.css";
import React, { useReducer } from "react";
import { FcPlanner } from "react-icons/fc";

import { Container, UncontrolledAlert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoContext } from "./Context/TodoContext";
import TodoReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <>
      <UncontrolledAlert color="success">
        Plan Your Awesome Day Here!
      </UncontrolledAlert>
      <div className="demo-wrap py-5">
        <div className="body py-2">
          <div className="demo-content">
            <TodoContext.Provider value={{ todos, dispatch }}>
              <Container fluid>
                <h1 className="head">
                  MyDay
                  <FcPlanner />
                </h1>
                <Todos />
                <TodoForm />
              </Container>
            </TodoContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

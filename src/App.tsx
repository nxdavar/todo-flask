
// external imports:
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";


// internal imports:
import './App.css';


interface task {
  taskName: string,
  taskDeadline: Date
}


function App() {

  const [tasks, setTasks] = useState<task[] | undefined>([]);

  function getData() {
    axios({
      method: "GET",
      url: "/profile",
    })
      .then((response) => {
        const res = response.data
        console.log('this is the response');
        console.log(res);
        setTasks((prev) => {
          if (prev) {
            return [...prev, {
              taskName: res.name,
              taskDeadline: res.about,
            }]
          }
        })
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header--cont">
          <h3>Flask Todo Application</h3>
          <Button style={{ backgroundColor: 'yellow' }} onClick={() => getData()}>Hello</Button>
          {tasks && tasks.map((taskItem, index) => (
            <div>{`${taskItem.taskName} ${taskItem.taskDeadline}`}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

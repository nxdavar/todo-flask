
// external imports:
import { useState, useEffect } from "react";
import axios from "axios";



// internal imports:
import './App.css';
import { task } from "./types";
import Todos from "./Todos";




function App() {

  const [tasks, setTasks] = useState<task[] | undefined>([]);

  const [runCount, setRunCount] = useState<number>(0);


  /**
   * Used to retrieve tasks from the backend
   */
  function getData() {
    console.log('this is the value of tasks and run count');
    console.log(tasks);
    console.log(runCount);
    axios({
      method: "GET",
      url: "/todos",
    })
      .then((response) => {
        const res = response.data
        console.log('this is the response');
        console.log(res);
        setTasks([...res])
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  }



  useEffect(() => {
    console.log('this is the value of runCount');
    console.log(runCount);
    if (runCount === 0) {
      setRunCount(1);
      getData();
    }
  }, [runCount])


  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header--cont">
          <h3 className="App--title">Your Todos</h3>
          <Todos tasks={tasks} getData={getData} />
        </div>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import ReactHighcharts from "react-highcharts/ReactHighcharts";
import "./App.css";
import useData from "./useData";

function App() {
  const { options } = useData();
  console.log({ options });
  return (
    <div className="App">
      <ReactHighcharts config={options} isPureConfig />
    </div>
  );
}

export default App;

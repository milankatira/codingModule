import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
// import jdoodle from "jdoodle-api";

function App() {
  const [code, setCode] = React.useState("");
  const [op, setOp] = React.useState("");
  const [lan, setlan] = React.useState("");
  console.log(lan, code);
  const handleSubmit = () => {
    const data = {
      code,
      languag: lan,
    };
    console.log(data)
    axios
      .post("http://localhost:8080/api/sendcode", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          Accept: "*/*",
        },
      })
      .then((res) => {
        setOp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='App'>
      <div>

      <CodeMirror
      className='codeEditor'
        value={code}
        height='500px'
        theme='light'
        autoFocus={true}
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          setCode(value);
        }}
      />
      </div>

      <input
        value={lan}
        placeholder='lan'
        onChange={(e) => setlan(e.target.value)}
      />

      <button className='button' onClick={handleSubmit}>submit</button>

      <CodeMirror
        value={op}
        height='200px'
        theme='dark'
        autoFocus={true}
        extensions={[javascript({ jsx: true })]}
      />
    </div>
  );
}

export default App;

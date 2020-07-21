import React, { useState } from "react";
import Form from "./components/Form";
import Members from "./components/Members";
import "./App.css";

function App() {
  const [state, setState] = useState({
    members: [
      {
        name: "Chris",
        age: 40,
        location: "Florida",
      },
    ],
    form: {
      name: "",
      age: "",
      location: "",
    },
  });
  const handleState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  console.log(state);
  return (
    <div className="App">
      <Form
        members={state.members}
        form={state.form}
        handleState={handleState}
      />
      <Members members={state.members} />
    </div>
  );
}

export default App;
